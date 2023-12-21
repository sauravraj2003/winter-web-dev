import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <div className="container">
       <Link to="/">Home</Link>
       {/* <Link to="/search">search</Link> */}
       <Link to="/create">New Blog</Link>
       <Link to="/Signin">Sign-in</Link>
       </div>
       </nav>
    );
}
 
export default Navbar;