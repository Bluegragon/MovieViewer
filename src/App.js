import { useState,useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Movies from './Movies';
import Navbar from './navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const Apikey="api_key=d8fd3513d400855ec3655436326039ed";
const Baseurl="https://api.themoviedb.org/3";

const Movieapi=Baseurl+"/discover/movie?sort_by=popularity.desc&"+Apikey;
const Tvapi =Baseurl+"/discover/tv?sort_by=popularity.desc&"+Apikey;
// const Imageapi="https://image.tmdb.org/t/p/w500";
 const Searchapi="https://api.themoviedb.org/3/search/movie?api_key=d8fd3513d400855ec3655436326039ed&page=1&query=";
 const SearchapiT="https://api.themoviedb.org/3/search/tv?api_key=d8fd3513d400855ec3655436326039ed&page=1&query=";
 const MovieapiR=Baseurl+"/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&"+Apikey;
 const MovieapiT=Baseurl+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&"+Apikey;
function App() {
  const [movies, setmovies] = useState([]);
  useEffect(() => { fetch(Movieapi).then((res)=>res.json()).then((data)=>{console.log(data);
  setmovies(data.results);}).catch(err=>{console.log(err)});
  }, []);
  const [tv, settv] = useState([]);
  useEffect(() => { fetch(Tvapi).then((res)=>res.json()).then((data)=>{console.log(data);
  settv(data.results);}).catch(err=>{console.log(err)});
  }, []);
  const [moviesR, setmoviesR] = useState([]);
  useEffect(() => { fetch(MovieapiR).then((res)=>res.json()).then((data)=>{console.log(data);
  setmoviesR(data.results);}).catch(err=>{console.log(err)});
  }, []);
  const [moviesT, setmoviesT] = useState([]);
  useEffect(() => { fetch(MovieapiT).then((res)=>res.json()).then((data)=>{console.log(data);
  setmoviesT(data.results);}).catch(err=>{console.log(err)});
  }, []);
const[searchterm,setsearchterm]=useState('');
  const handleonSubmit=(e)=>{
    e.preventDefault();
    if (searchterm){
    fetch(Searchapi+searchterm).then((res)=>res.json()).then((data)=>{console.log(data);
      setmovies(data.results);}).catch(err=>{console.log(err)});
      setsearchterm("");}
  };
  const handleonSubmitT=(e)=>{
    e.preventDefault();
    if (searchterm){
    fetch(SearchapiT+searchterm).then((res)=>res.json()).then((data)=>{console.log(data);
      settv(data.results);}).catch(err=>{console.log(err)});
      setsearchterm("");}
  };

  const handleOnchange=(e)=>{setsearchterm(e.target.value);};
  const handleOnchangeT=(e)=>{setsearchterm(e.target.value);};

  return (
    <Router>
  <div>
    <Navbar/>
    <Switch>
      <Route exact path="/">
    <div className="search">
      
         <form onSubmit={handleonSubmit}><div className="input-group">
  <div className="form-outline"  id="searching" >
    <input type="search" id="form1" className="form-control" placeholder="search" value={searchterm} onChange={handleOnchange} />
   
  </div>
</div></form> 
     </div>);</Route>
     <Route exact path="/R">
    <div className="search">
      
         {/* <form onSubmit={handleonSubmit}><div className="input-group">
  <div className="form-outline"  id="searching" >
    <input type="search" id="form1" className="form-control" placeholder="search" value={searchterm} onChange={handleOnchange} />
   
  </div>
</div></form>  */}
     </div>);</Route>
      <Route exact path="/show">
    <div className="search">
      
         <form onSubmit={handleonSubmitT}><div className="input-group">
  <div className="form-outline"  id="searching" >
    <input type="search" id="form1" className="form-control" placeholder="search" value={searchterm} onChange={handleOnchangeT} />
   
  </div>
</div></form> 
     </div>);</Route>
     <Route exact path="/R">
    <div className="search">
       </div>);</Route><Route exact path="/pop">
    <div className="search">
      
         {/* <form onSubmit={handleonSubmit}><div className="input-group">
  <div className="form-outline"  id="searching" >
    <input type="search" id="form1" className="form-control" placeholder="search" value={searchterm} onChange={handleOnchange} />
   
  </div>
</div></form>  */}
     </div>);</Route><Route exact path="/release">
    <div className="search">
      
         {/* <form onSubmit={handleonSubmit}><div className="input-group">
  <div className="form-outline"  id="searching" >
    <input type="search" id="form1" className="form-control" placeholder="search" value={searchterm} onChange={handleOnchange} />
   
  </div>
</div></form>  */}
     </div>);</Route></Switch>
    
     <Switch><Route exact path="/">

    <div className="movcont">
    { movies.length>0 && movies.map((movie)=>(<Movies key={movie.id} {...movie}/>))}</div></Route>
    <Route exact path="/show">

    <div className="movcont">
    { tv.length>0 && tv.map((tv)=>(<Movies key={tv.id} {...tv}/>))}</div></Route>
    <Route exact path="/R">

<div className="movcont">
{ moviesR.length>0 && moviesR.map((movie)=>(<Movies key={movie.id} {...movie}/>))}</div></Route>
<Route exact path="/release">

<div className="movcont">
{ moviesT.length>0 && moviesT.map((movie)=>(<Movies key={movie.id} {...movie}/>))}</div></Route>
 <Route exact path="/pop">

<div className="movcont">
{ movies.length>0 && movies.map((movie)=>(<Movies key={movie.id} {...movie}/>))}</div></Route>

    

    

    </Switch>
    
  </div></Router>
   
  );
}

export default App;
