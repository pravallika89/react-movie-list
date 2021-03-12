import 'bootstrap/dist/css/bootstrap.min.css';

const MovieListComponent = ({movies}) => {
  return (
     <div className='row '>
       {/* <div className='col text-center'>
           <h1>Movie List</h1>
       </div> */}
        
        <div className='row'>
          <table striped bordered hover size="sm">
            <tbody>
              {/* {movies.map((movie =>
              <tr key={movie.id}>
              <td>{movie.genre} </td> 
              <td>{movie.genre} </td> 
              </tr>
              ))} */}
              {movies.map((movie) => (
                <tr key={movie.id}>
                {Object.values(movie).map((val) => (
                <td>{val}</td>
                ))}
                </tr>
              ))} 
            </tbody>
          </table>  
        </div>
      </div>
      

);};

// const MovieListComponent=({movies})=>{

//   const displayMovieImg() =>{
//     let imgUrl= movies.movieImage;
//   }
// console.log(movies);
// return(
//   <div className="row ">
//       <div className="col-6 offset-3">
//        <table>
//        <ul className="list-group">
//           {
//             movies.map((movie,index)=>{
//               return (
//                 <li className='list-group-item' key={index}> 
//                   <a href="javascript:void(0)" 
//                 >{movie.title} {movie.movieImage}</a>
                  
//                 </li>
//                 );
//             })
//           }
//         </ul>
//        </table>

        
//       </div>
//     </div>
// )
// }

export default MovieListComponent;