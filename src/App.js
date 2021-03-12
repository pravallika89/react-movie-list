import MovieListComponent from './MovieList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let movies = [
  { id: 1,
    title:'Inception',
    year: 2010,
    genre:'Adventure', 
    imdbLink:'https://www.imdb.com/video/vi2959588889?playlistId=tt1375666&ref_=tt_ov_vi' , 
    image:'' },
  {id: 2,title:'Martin', year: 1992, genre:'Comedy', imdbLink:'https://www.imdb.com/video/vi2207777049?playlistId=tt0103488&ref_=tt_pr_ov_vi' , image:'' },
  {id: 3, title:'Fresh prince of bel-Air', year: 1990, genre:'Comedy', imdbLink:'https://www.imdb.com/video/vi4005740825?playlistId=tt0098800&ref_=tt_ov_vi' , image: ''},
  {id: 4,title:'Friends', year: 1994, genre:'Comedy', imdbLink:'https://www.imdb.com/video/vi4005740825?playlistId=tt0098800&ref_=tt_pr_ov_vi' , image:'' },
  {id: 5,title:'The Intouchables', year: 2011, genre:'Biography', imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , image:'' },
]

function App() {
  return (
    <div className="App">
     <MovieListComponent movies={movies}/>
    </div>
  );
}

export default App;
