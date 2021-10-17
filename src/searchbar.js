import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const Search = ({searchterm,handleChange}) => {
     return (<div className="search">
          <div className="input-group">
  <div className="form-outline"  id="searching" >
    <input type="search" id="form1" className="form-control" placeholder="search" value={searchterm} />
   
  </div>
  <button type="button" className="btn btn-primary" id="but" onClick={handleChange}>
 <h5>search</h5>
  </button>
</div>
     </div>);
}
 
export default Search;