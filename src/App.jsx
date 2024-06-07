import React, { createContext, useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import User from './components/User'
import useApi from './components/api'
import Nav from './components/Nav'
import Header from './components/header'
import Graph from './components/graph'
import Footer from './components/footer'

export const userContext = createContext();

const App = () => {
  
  const [userHandle, setUserHandle] = useState('')

  const {titlePhoto, error, loading, firstName, lastName, country, city, organization, friends, email, regdate, rank, maxRank , rating, maxRating } = useApi({userHandle});
  return (
    
    <>
     <Grid templateAreas={{
      base: `"nav" "header" "main" "graph" "footer"`,
      lg: `"nav nav"
            "header header"
           "main graph" 
           "footer footer"`
     }} gap={2}>

      <GridItem area="nav">
        <userContext.Provider value={{userHandle, setUserHandle}}>
        <Nav/>
        </userContext.Provider>
        </GridItem>
      <GridItem area="header">
        <Header/>
      </GridItem>
      <GridItem area="main" >
        <userContext.Provider value={{userHandle, setUserHandle}}>
        <User titlePhoto={titlePhoto}
        error={error}
        loading={loading}
        firstName={firstName}
        lastName={lastName}
        country={country}
        city={city}
        organization={organization}
        friends={friends}
        email={email}
        regdate={regdate}
        rank={rank}
        maxRank={maxRank}
        maxRating={maxRating}
        rating={rating}/>
        </userContext.Provider>
        </GridItem>
      <GridItem area="graph" >
        <userContext.Provider value={{userHandle}}>
        <Graph/>
        </userContext.Provider>
      </GridItem>
      <GridItem area="footer" bg="transparent">
        <Footer/>
      </GridItem>

     </Grid>

    </>
    
  )
}

export default App