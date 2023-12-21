import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="notfound">
        <h2>Sorry</h2>
        <p>page is not found</p>
        <Link to={'/'}> Back to Home page...</Link>
        </div>
      );
}
 
export default Notfound;