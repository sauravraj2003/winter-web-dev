import {useState , useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
   const {data : blogs, isPending, error} = useFetch(' http://localhost:8000/posts');
      
    return ( 
        <div className="container">
            { error && <div> { error } </div> }
            { isPending && <div>Loading...</div> }
           {blogs && <BlogList  blogs = {blogs} title = "All Blogs"/>}
        </div>
     );
}
 
export default Home;