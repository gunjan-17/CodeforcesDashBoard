import useFetch from "./FetchApi"

const useApi = ({userHandle}) =>{
    const {data, loading, error} = useFetch(`https://codeforces.com/api/user.info?handles=${userHandle}`)
 const firstName = data.firstName
 const titlePhoto = data.titlePhoto
 const lastName = data.lastName
 const name = firstName + ' ' + lastName
 const country = data.country
 const city = data.city
 const organization = data.organization
 const friends = data.friendOfCount
 const email = data.email
 const registeration = data.registrationTimeSeconds
 const rank = data.rank
 const rating = data.rating
 const maxRank = data.maxRank
 const maxRating = data.maxRating
 const regdate = new Date(data.registrationTimeSeconds*1000);

 return {firstName,lastName,name, titlePhoto, country, city, organization, friends, email, registeration, rank, regdate, rating, maxRank, maxRating, loading, error};
}

export default useApi;
// export default [firstName,lastName,name, country, city, organization, friends, email, registeration, rank, regdate, rating, maxRank, maxRating, loading, error ]