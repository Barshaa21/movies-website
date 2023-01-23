// opt =optimize
const Opt= async(searchbytitle)=>{
    const response = await fetch(`${API_URL}&s=${searchbytitle}`)
    const data = await response.json();
    const {Search}=data;
    // console.log(data.Search);
    // setMovies(data.Search)
    return data.Search
}
export default Opt


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=db1c110a'
