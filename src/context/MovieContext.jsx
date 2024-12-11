import { createContext, useEffect, useState } from "react";

const MovieContext = createContext()

export default function MovieProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movieDataApi, setMovieDataApi] = useState({})
    const url = 'http://localhost:3001/'
    const endpoint = 'api/movies/'
    function fetchMovieData() {
        fetch(`${url}${endpoint}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Errore HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setMovieDataApi(data);
            })
            .catch((err) => {
                setError(err.message);
                console.error("Errore nel fetch:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }


    useEffect(fetchMovieData, [])

    console.log("MovieProvider rendering, movieDataApi:", movieDataApi)
    return (
        <MovieContext.Provider value={{ movieDataApi, loading, error }}>
            {children}
        </MovieContext.Provider>
    );
}


