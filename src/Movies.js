

const Imageapi="https://image.tmdb.org/t/p/w500";
const Movies = ({title,poster_path,overview,vote_average,original_name}) => {
     const setVoteClass=(vote)=>{
          if (vote>=8){
               return "green" ;
          }
          else if (vote>=6){
               return "orange" ;
          }
          else  {
               return "red" ;
          }
     }
     return ( <div className="cont">
          <div className="movie"><img src={Imageapi + poster_path} alt="" /></div><div className="info"><h6>{title || original_name}</h6>
     <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span></div><div className="over"><h4>overview</h4><p>{overview}</p></div></div> );
}
 
export default Movies;