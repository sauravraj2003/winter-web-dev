import {useState , useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const[error,setError] = useState(null); 
    const abortcont = new AbortController(); 

    useEffect(()=> {
        setTimeout(() => {
        fetch(url, { Signal:abortcont.signal })
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data ');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setisPending(false);
            setError(null);
        })

         .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
         setisPending(false);
         setError(err.message);
            }
         });
        },1000);
         return () => abortcont.abort();
    } , [url]);
    return {data, isPending, error};
}
 
export default useFetch;