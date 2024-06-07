import { useEffect, useState } from "react"
import axios from 'axios';

function useFetch(url){
    const [data, SetData] = useState('');
    const [loading, SetLoading] = useState(false);
    const [error, SetError] = useState('');

    useEffect(() => {
        SetLoading(true);
        axios.get(url).then((res) => {SetData(res.data.result[0]);}).catch((err) => {SetError(err)}).finally(() => SetLoading(false))
    }, [url])

    return {data, loading, error};
}


export default useFetch;