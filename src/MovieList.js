//import Table from 'react-bootstrap/Table';

const MovieListComponent = ({movies}) => {
    const movieDetails =(movieId) => {
        let foundMovie = movies.find(movie => movie.id === movieId);
        if(!foundMovie){
            alert('Sorry we could not find your movie!')
        }
        else {
            alert (`${foundMovie.title}| ${foundMovie.genre} | ${foundMovie.year}`)
        }
    }
    return (
        <div className = 'row text-center'>
         {/* <div className='row text-center'>
           <div className='col'>
            <h1>Movie List</h1>
         </div> */}
        
             <div className='col-6 offset-3'>
                 <h1>Movie List</h1>
             </div>
             <table className='table table-striped table-dark'>
                 <tbody>
                 {
                   movies.map((movie, index) => {
                  return (
                            <tr key={movie.id} >
                                <td><h1 className='align-self-center'><a href={movie.imdbLink} target='_blank' rel='noreferrer'>{movie.title}</a></h1></td>
                                <td><img  src={movie.image} alt='img' height='100px' width='100px'/></td>
                                <td><button className='btn btn-primary justify-content-center' onClick={ () => movieDetails(movie.id)}>Details</button></td>
                            </tr>
                            
        
         
                 )
              })
            }
                 </tbody>
             </table>
             
         
             
         
        </div>
// </div>
        
        
        
        
    );

};

export default MovieListComponent; 