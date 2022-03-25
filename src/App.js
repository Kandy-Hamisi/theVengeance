import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import SearchIcon from './SearchIcon.svg';


// my Omdb APi key a841af56 a841af56

const API_KEY = "https://www.omdbapi.com?apikey=a841af56";

const App = () => {

  // set a movie
  const [movies, setMovie] = useState([]);

  const [search, setSearchTerm] = useState('');




  useEffect(() => {
    renderMovie("Batman");
  }, []);

  // function to search movie
  const renderMovie = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    console.log(data);

    // setting the movies retrived from the object
    setMovie(data.Search);
  }



  return (
    <div className="app">
      <Header title="The Vengeance" />

      <div className='search'>
        <input 
          value={search}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />

        <img 
          src={SearchIcon}
          alt ="search icon"
          onClick={() => renderMovie(search)}
        />

      </div>


      {/* {movies.length > 0 ? (
        <div className='container'>
        {movies.map((movieEl) => {
          <MovieCard movie={movieEl} />
        })}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies Found</h2>
        </div>
      )} */}

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movieEl) => (
            <MovieCard movie={movieEl} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
