import {useState, useEffect} from 'react'
import getCountNew from '../../utils/getCountNew'

const useFetch = (url) => {
    const [students, setStudents] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError]= useState(null);
    const [countNew, setCountNew]= useState(null);

    useEffect(()=>{
        
        // AbortController
        const abortCont = new AbortController();

        // {signal: abortCont.signal}
        fetch(url, {signal: abortCont.signal}).then((res) => {
            if (res.ok !== true){
                throw Error('Could not fetch the students data from this resource!');
            }
            return res.json()
        }).then((students) => {            
            setStudents(students);
            setLoading(false);
            setError(null);
            setCountNew(getCountNew(students));

        }).catch((err)=>{
            // AbortError
            if (err.name === "AbortError"){
                console.log("fetch aborted");
            } else {
                setError(err.message)
                setLoading(false)
            }
        })

        // cleanup
        return () => {
            console.log('cleanup');
            abortCont.abort();
        }
    }, [])

    return {students, isLoading, error, countNew}
}

export default useFetch;