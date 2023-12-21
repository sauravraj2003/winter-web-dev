import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom"

const Blogdetails = () => {
    const history = useHistory();
    const{ id } = useParams();
    const {data:blog, error, isPending } = useFetch('http://localhost:8000/posts/' + id); 
    const handledelete = () =>{
       fetch('http://localhost:8000/posts/' + blog.id, {
        method : 'DELETE'
       }).then(
        history.push('/')
       );
    } 
    return ( 
        <div className="Blog-details">
             {isPending && <div>Loading...</div>}
             {error && <div>{ error } </div>}
             {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p> Written by { blog.author }</p>
                    <div className="blogbdy">{ blog.body }</div>
                    <button onClick={handledelete}>Delete</button>
                    
                </article>
             )}
             </div>
     );
}
 
export default Blogdetails;