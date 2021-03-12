
import './App.css';
import MovieListComponent from './MovieList';
import martin from './img/martin.png';
import inception from './img/inception.png';
import friends from './img/friends.png';
import intouch from './img/intouch.png';
import fresh from './img/fresh.png';

let movies = [
  {id: 1,title:'Inception', year: 2010, genre:'Adventure', imdbLink:'https://www.imdb.com/video/vi2959588889?playlistId=tt1375666&ref_=tt_ov_vi' , image: inception },
  {id: 2,title:'Martin', year: 1992, genre:'Comedy', imdbLink:'https://www.imdb.com/video/vi2207777049?playlistId=tt0103488&ref_=tt_pr_ov_vi' , image:martin },
  {id: 3, title:'Fresh prince of bel-Air', year: 1990, genre:'Comedy', imdbLink:'https://www.imdb.com/video/vi4005740825?playlistId=tt0098800&ref_=tt_ov_vi' , image:fresh},
  {id: 4,title:'Friends', year: 1994, genre:'Comedy', imdbLink:'https://www.imdb.com/video/vi4005740825?playlistId=tt0098800&ref_=tt_pr_ov_vi' , image:friends },
  {id: 5,title:'The Intouchables', year: 2011, genre:'Biography', imdbLink:'https://www.imdb.com/video/vi59285529?playlistId=tt1675434&ref_=tt_ov_vi' , image:intouch },

]
const App = () => {
  return (
    <div className='container'>
    <MovieListComponent movies={movies}/>
    </div>
  );
}

export default App;
