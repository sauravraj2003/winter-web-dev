import { useState } from "react";
import { useHistory } from "react-router-dom"
const Create = () => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [body,setBody] = useState('');
    const[isPending, setisPending] = useState(false);
    const History = useHistory();
    const handleClick= (e) => {
               e.preventDefault();
               const blog = { title , body , author};

               setisPending(true);    

               fetch('http://localhost:8000/posts', {
                method : 'POST',
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify(blog),
                
               }).then(() => {
                    setTimeout(() => {
                        console.log("new blog added");
                        setisPending(false);
                        History.push('/');
                    }, 1000);
              
            
                
            })
    }
    return ( 
        <div className="create">
        
            <form onSubmit={handleClick}>
                <label>Blog Title : </label>
                <input
                 type="text"
                 required
                 onChange = {(e) => setTitle(e.target.value)} 
                 />

                <label> Written by : </label>
                <input
                 type="text"
                 required
                 onChange = {(e) => setAuthor(e.target.value)}
                />

                <label> Blog Body : </label>
                <textarea required
                    onChange = {(e) => setBody(e.target.value)}
                    >
                </textarea>

            </form>
            { !isPending && <button onClick={handleClick}>Add Blog</button> }
            { isPending && <button disabled>Adding Blog...</button> }
            
           

        </div>
        );
}
 
export default Create;