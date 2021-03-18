import {useState} from 'react';

const MovieFormComponent=( { movie , setMovie ,saveMovie })=>{
  console.log('inside the form component this is movie',movie);
  //Initialize variables and state hooks
  // const [movieTitle,setMovieTitle]=useState('');
  // const [movieImbdLink,setMovieImbdLink]=useState('');
  // const [movieYear,setMovieYear]=useState('');
  // const [movieGenre,setMovieGenre]=useState('');
  // const [movieImgLink,setMovieImgLink]=useState('');

  //Initialize functions

  const handleSubmit = event => {
    event.preventDefault();
    console.log('submit button', event);
    saveMovie(movie);
    // event.preventDefault();
    // let newMovie={
    //   title:movieTitle,
    //   year:movieYear,
    //   genre:movieGenre,
    //   imdbLink:movieImbdLink,
    //   image:movieImgLink,
    // };
    // console.log(newMovie);
    // addNewMovie(newMovie);
    // clearForm();
  }

  // const clearForm = () => {
  //   setMovieTitle('');
  //   setMovieImbdLink('');
  //   setMovieYear('');
  //   setMovieGenre('');
  //   setMovieImgLink('');
  // };
  return(
    <div className='row mb-5'>
      <div className='col-6 offset-3'>
        <form 
        action='submit' 
        id='movie-form'
        onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='movieTitle'>Movie Title</label>
            <input 
              type="text"
              id='movieTitle'
              className='form-control'
              value={movie.title} 
              onChange={(event)=>{
                setMovie({...movie, title: event.target.value});
              }}
              />
          </div>

          <div className='form-group '>
            <label htmlFor='movieImbdLink'>Movie Imbd</label>
            <input 
              type="text"
              id='movieImbdLink'
              className='form-control'
              value={movie.imdbLink}
              onChange={(event)=>{
                setMovie({...movie, imdbLink:event.target.value});
              }}
              />
          </div>

          <div className='form-group '>
            <label htmlFor='movieImgLink'>Movie Image</label>
            <input 
              type="text"
              id='movieImgLink'
              className='form-control'
              value={movie.image}
              onChange={(event)=>{
                setMovie({...movie, image:event.target.value});
              }}
              />
          </div>

          <div className='row'>
            <div className='form-group col'>
              <label htmlFor='movieYear'>Movie Year</label>
              <input 
                type="text"
                id='movieYear'
                className='form-control'
                value={movie.year} 
                onChange={(event)=>{
                  setMovie({...movie, year:event.target.value});
                }}

                />
            </div>

            <div className='form-group col'>
              <label htmlFor='movieGenre'>Movie Genre</label>
              <input 
                type="text"
                id='movieGenre'
                className='form-control'
                value={movie.genre} 
                onChange={(event)=>{
                  setMovie({...movie, genre:event.target.value});
                }}
                />
            </div>
          </div>
        <button className='btn btn-primary btn-block'>Save</button>
        </form>

      </div>
    </div>
  );
};

export default MovieFormComponent;