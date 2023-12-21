import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    return ( 
         <div className="blogList">
            <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="body" key = {blog.id}>
                <Link to = {`/Blogdetails/${blog.id}`}>
               <h2>{ blog.title }</h2>
               <p>written by { blog.author }</p>
             </Link>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;