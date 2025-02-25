import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [students, setStudents] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError]= useState(null);

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
            setStudents(students)
            setLoading(false)
            setError(null)
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

    return {students, isLoading, error}
}

export default useFetch;