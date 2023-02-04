import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import Opt from './Opt';

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputText = (e) => {
    setSearch(e.target.value); }

  useEffect(()=>{
    searchMovies('avengers')
  },[])

  const searchMovies = async (searchbytitle) => {
    const a=await Opt(searchbytitle);
    setMovies(a);
  }
  console.log(movies)


  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=db1c110a'

  return (
    <div className="app" style={{ color: 'white' }}>
      <Header />
      <div className='search'>
        <input placeholder='Search here' value={search} onChange={(a) => handleInputText(a)} />
        <img alt='search' onClick={() => searchMovies(search)} />
      </div>
      {movies && movies.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <List title={movie.Title} type={movie.Type} year={movie.Year} image={movie.Poster}/>
          ))}
        </div>) :
        (<div className='container'>
          <h1>No movies found</h1>
        </div>)}

    </div>
  );
}

export default App;
