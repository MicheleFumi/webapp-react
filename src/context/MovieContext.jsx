import { createContext, useEffect, useState } from "react";

const MovieContext = createContext()

export default function MovieProvider({ children }) {
    const [movieDataApi, setMovieDataApi] = useState({})
    const url = 'http://localhost:3001/'
    const endpoint = 'api/movies/'
    function fetchMovieData() {
        fetch(`${url}${endpoint}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                setMovieDataApi(data)



            }
            )
    }

    useEffect(() => {
        fetchMovieData()
    }, [])


    console.log("MovieProvider rendering, movieDataApi:", movieDataApi)
    return (
        <MovieContext.Provider value={{ movieDataApi }}>
            {children}
        </MovieContext.Provider>
    );
}


