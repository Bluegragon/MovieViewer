import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const Navbar = () => {
     return ( <div className="nav">
          <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
  <div className="container">
    <a className="navbar-brand" href="/" id="log">
  
    <h2 id="logo">MovieViewer</h2>
     
    </a>

  </div>
  <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><h5>Movies</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/show"><h5>shows</h5></a>
        </li>
        <a class="nav-item nav-link active" href="/pop"><h5>Popular</h5> </a>
         <a class="nav-item nav-link active" href="/R"><h5>TopRated</h5></a>
         <a class="nav-item nav-link active" href="/release"><h5>RecentRelease</h5></a>
      
      </ul>
    </div>
  
</nav>
     </div> );
}
 
export default Navbar;