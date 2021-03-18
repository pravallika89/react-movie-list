//import Table from 'react-bootstrap/Table';
import { useState } from 'react';
//import MovieDelete from "./MovieDelete";

const MovieListComponent = ({movies, removeMovie, setMovie}) => {
    //const [movieList, setMoviesList] =  useState(movies);
    const movieDetails =(movieId) => {
        let foundMovie = movies.find(movie => movie.id === movieId);
        if(!foundMovie){
            alert('Sorry we could not find your movie!')
        }
        else {
            alert (`${foundMovie.title}| ${foundMovie.genre} | ${foundMovie.year}`)
        }
    }

    // const movieDelete = (movieId) => {
    //     let removeMovie = movieList.find((movie) => movie.id === movieId);
    //     if( window.confirm(`Are you sure you want to remove ${removeMovie.title}?`)){
    //         setMoviesList(movieList.filter(movie => movie.id !== movieId));
    //         // console.log('movielist--->',movieList);
    //         // console.log('movies---->',movies);
    //     }
    //     else {
    //         alert("Sorry we don't have that Movie :(")
    //     }
    // }

     const movieUpdate = (movieFromList,index) => {
         console.log('movie info after click',movieFromList);
         setMovie(movieFromList,index);

    }


    return (
        <div className = 'row text-center'>
        
        
             <div className='col-6 offset-3'>
                 <h1>Movie List</h1>
             </div>
          
             <table className='table table-striped table-dark'>
                 <tbody>
                 {
                   movies.map((movie) => {
                  return (
                            <tr key={movie.id} >
                                <td><h3 className='align-self-center'>{movie.id}</h3></td>
                                <td><h2 className='align-self-center'><a href={movie.imdbLink} target='_blank' rel='noreferrer'>{movie.title}</a></h2></td>
                                <td><img  src={movie.image} alt='img' height='100px' width='100px'/></td>
                                <td><button className='btn btn-info justify-content-center' onClick={ () => movieDetails(movie.id)}>Details</button></td>
                                <td><button className='btn btn-danger justify-content-center' onClick={ () => removeMovie(movie.id)}>Delete</button></td>
                                <td><button className='btn btn-success justify-content-center' onClick={ () => movieUpdate(movie)}>Update</button></td>
                     
                            </tr>

                            
        
         
                 )
              })
            }
                 </tbody>
             </table>
             
         
             
         
        </div>

        
        
        
        
    );

};

export default MovieListComponent; 
