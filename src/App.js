// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import List from './List';
import Opt from './Opt';

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputText = (e) => {
    setSearch(e.target.value); //a and e in handle input can be different same value will be assigned in argument
    console.log(e)//value stored within taget.value can check in inspect
  }

  useEffect(()=>{
    searchMovies('test')
  },[])//array dependencies to reserach everytime

  const searchMovies = async (searchbytitle) => {
    // alert(searchbytitle)
    // const response = await fetch(`${API_URL}&s=${searchbytitle}`)
    // const data = await response.json();
    // console.log(data.Search);
    const a=await Opt(searchbytitle);
    setMovies(a);
  }
  console.log(movies)


  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=db1c110a'

  return (
    <div className="app" style={{ color: 'white' }}>
      {/* <p>this is react</p> */}
      <Header />
      <div className='search'>
        <input placeholder='Search here' value={search} onChange={(a) => handleInputText(a)} />
        <img alt='search' onClick={() => searchMovies(search)} />
      </div>
      {movies && movies.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            // <List title={movie.title} image={movie.image} rating={movie.rating} type={movie.type} year={movie.year}/>
            <List title={movie.Title} type={movie.Type} year={movie.Year} image={movie.Poster}/>
          ))}
        </div>) :
        (<div className='container'>
          <h1>No movies found</h1>
        </div>)}



      {/* // <div className='container'>
      //   {movies.map((movie) => { */}
      {/* //     <List title={movie.title} image={movie.image} rating={movie.rating} />
      //   })}
      </div> */}

    </div>
  );
}

export default App;
