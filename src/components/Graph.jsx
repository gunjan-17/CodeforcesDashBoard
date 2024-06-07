import { useState, useEffect } from 'react'
import { Card } from '@chakra-ui/react'
import { useContext } from 'react'
import { userContext } from '../App'
import axios from 'axios'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, DateTime, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function useRating(url){
  const [data, SetData] = useState('');
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState('');

  useEffect(() => {
      SetLoading(true);
      axios.get(url).then((res) => {SetData(res.data);}).catch((err) => {SetError(err)}).finally(() => SetLoading(false))
  }, [url])

  const dataEntry = data === '' ? 0: data.result.length

  return {data, loading, error, dataEntry};
}

const Graph = () => {
  const {userHandle} = useContext(userContext)
  const { data, loading, error, dataEntry } = useRating(`https://codeforces.com/api/user.rating?handle=${userHandle}`)

  if(userHandle === '')
  {
    return <>
    </>
  }
  
  else
  {
    const primaryxAxis = { valueType: 'DateTime', title: "History of User's Rating", rangePadding: 'None', labelFormat: 'd/M/y' };
    const primaryyAxis = { title: "User's Rating" };
    let i = 0
    const arr = []
  while(i<dataEntry)
  {
    console.log(data.result[i].newRating, data.result[i].ratingUpdateTimeSeconds);
    let unixDate = data.result[i].ratingUpdateTimeSeconds*1000
    let date = new Date(unixDate)
    arr[i] = {rating: data.result[i].newRating, Date: date };
    i++;
  }
  return (
    <Card align={'center'} m={3}>
        <ChartComponent primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Rating History of User'>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, DateTime]}/>
          <SeriesCollectionDirective>
          <SeriesDirective dataSource={arr} xName='Date' yName='rating' name='Rating' type='Line'>
        </SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
    </Card>
  )
  }
}
  

export default Graph