import {useState} from 'react';
import './App.css';
import MovieListComponent from './MovieList';
import martin from './img/martin.png';
import inception from './img/inception.png';
import friends from './img/friends.png';
import intouch from './img/intouch.png';
import fresh from './img/fresh.png';
import Batman from './img/batman.png';
import WonderWoman from './img/wonderwoman.png';
import Wolverine from './img/Wolverine.png';
import Spiderman from './img/spiderman.png';
import Avtar from './img/Avtar.png';
import MovieFormComponent from './MovieForm.js';

let moviesData = [
  { id: 1,
    title:'Inception', 
    year: 2010, 
    genre:'Adventure', 
    imdbLink:'https://www.imdb.com/video/vi2959588889?playlistId=tt1375666&ref_=tt_ov_vi' , 
    image: inception 
  },
  { id: 2,
    title:'Martin', 
    year: 1992, 
    genre:'Comedy', 
    imdbLink:'https://www.imdb.com/video/vi2207777049?playlistId=tt0103488&ref_=tt_pr_ov_vi' ,
     image:martin 
    },
  { 
    id: 3, 
    title:'Fresh prince of bel-Air', 
    year: 1990, 
    genre:'Comedy', 
    imdbLink:'https://www.imdb.com/video/vi4005740825?playlistId=tt0098800&ref_=tt_ov_vi' , 
    image:fresh
  },
  { 
    id: 4,
    title:'Friends', 
    year: 1994, 
    genre:'Comedy', 
    imdbLink:'https://www.imdb.com/video/vi4005740825?playlistId=tt0098800&ref_=tt_pr_ov_vi' , 
    image:friends 
  },
  { 
    id: 5,
    title:'The Intouchables', 
    year: 2011, 
    genre:'Biography', 
    imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , 
    image:intouch 
  },
  { 
    id: 6,
    title:'Batman', 
    year: 1989, 
    genre:'Adventure', 
    imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , 
    image:Batman 
  },
  { 
    id: 7,
    title:'Wonder Woman', 
    year: 2011, 
    genre:'Fantacy', 
    imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , 
    image:WonderWoman 
  },
  {
    id: 8,
    title:'Wolverine', 
    year: 2011, 
    genre:'Sci-Fi', 
    imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , 
    image:Wolverine 
  },
  {
    id: 9,
    title:'Spiderman', 
    year: 2011, 
    genre:'Action', 
    imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , 
    image:Spiderman 
  },
  {
    id: 10,
    title:'Avtar', 
    year: 2009, 
    genre:'Adventure', 
    imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , 
    image:Avtar },

]



const App = () => {
  const [movies,setMovies]=useState(moviesData);
  const [success,setSuccess]=useState(false);
  const [movie, setMovie]=useState({
    id: '',
    title:'', 
    year: '', 
    genre:'', 
    imdbLink:'' , 
    image: '' 
  });
  const saveMovie = (movie) => {
    
    // check to see if a movie has an id
    //if it does, then update the movie
    //if it doesn't then save it as new movie 
    if (movie.id) {
      //replace our original movie details with updated details
      //push back into our array
      console.log(movie.title);
      let i =movies.findIndex(m =>m.id === movie.id)
      let updatedMovies = movies.filter(m => m.id !== movie.id);
      //updatedMovies.push(movie)
      updatedMovies.splice(i,0,movie)
      setMovies([ ...updatedMovies]);

    } else{
      //create unique id for the new movie
      movie.id=Date.now();
      setMovies([...movies,movie])
    }

    // console.log('get to save the movie inside the app', movie);
    // movie.id = Date.now();
    // setMovies([...movies, movie]);
    // console.log('my movies',movies);
    setMovie({
      id: '',
    title:'', 
    year: '', 
    genre:'', 
    imdbLink:'', 
    image: '',
    })
 };
 // clear form
 const removeMovie = (movieId) => {
   if(window.confirm('Are you sure you to remove this movie?')){
    let newMovies = movies.filter(m => m.id !== movieId);
    //console.log ('My new movies', newMovies);
    setMovies(newMovies);

   }
   

 }
  // const addNewMovie= (movie)=>{
  //   setMovies([...movies,movie]);
  //   setSuccess(true);
  //   setTimeout(()=>{
  //     setSuccess(false);
  //   },2000);
  // }
  return (
    <div className='container'>
       {success ? (
        <div className='row'>
          <div className='col-6 offset-3'>
            <div class='alert alert-success text-center' role='alert'>
              You've successfully added a Movie!
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    <MovieFormComponent movie={movie} setMovie={setMovie} saveMovie={saveMovie} />
    <MovieListComponent movies={movies} removeMovie={removeMovie} setMovie={setMovie}/>
    </div>
  );
}

export default App;
