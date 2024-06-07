import { Box, Card, CardFooter, CardHeader, Skeleton, Stack, StackDivider } from "@chakra-ui/react"
const Info = ({firstName, lastName, country, city, organization, friends, email, regdate, loading, error}) => {
    function calcmonth()
    {
        let currDate = new Date();
        let month = (currDate.getFullYear()- regdate.getFullYear())*12;
        month -= regdate.getMonth();
        month += currDate.getMonth();

        return month> 0 ? `${month} Months Ago`: `${currDate.getDate-regdate.getDate()} Days Ago`
    }

    let name = '';
    if(firstName === undefined && lastName === undefined)
    {
        name = 'Name not Provided'
    }
    else if(firstName === undefined)
    {
        name = lastName
    }
    else if(lastName === undefined)
    {
        name = firstName
    }
    else{
        name = firstName + ' ' + lastName
    }

    let countryData = country === undefined ? 'Not Provided' : country
    let cityData = city === undefined ? 'Not Provided' : city
    let organizationData = organization === undefined ? 'Not Provided' : organization
    let emailData = email === undefined ? 'Not Provided' : email
    
  return (
    <Skeleton isLoaded={!loading}>
    <Card >
        <CardHeader fontSize={"lg"}>{name}</CardHeader>
        <Stack divider={<StackDivider/>} spacing={4} p={4}>
            <Box>
                Country: {countryData}
            </Box>
            <Box>
                City: {cityData}
            </Box>
            <Box>
                Organization: {organizationData}
            </Box>
            <Box>
                Friend of: {friends + " "} users 
            </Box>
            <Box>
                Email: {emailData}
            </Box>
            <Box>
                Last Registered: {calcmonth(regdate)}
            </Box>
        </Stack>
        <CardFooter/>
    </Card>
    </Skeleton>
  )
}

export default Info