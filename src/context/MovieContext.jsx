import { createContext, useContext, useEffect, useState } from "react";
const MovieContext = createContext()

export default function MovieProvider({ children }) {
    const [movieDataApi, setMovieDataApi] = useState({})
    const [reviews, setReviews] = useState({})
    const url = 'http://localhost:3001/'
    const endpoint = 'api/movies/'




    function fetchMovieData() {
        fetch(`${url}${endpoint}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                setMovieDataApi(data.movies)



            }
            )
    }
    function movieReview(id) {
        const reviewEndpoint = `api/movies/${id}`
        fetch(`${url}${reviewEndpoint}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.reviews);

                setReviews(data.reviews)



            }
            )

    }






    useEffect(() => {
        fetchMovieData()

    }, [])




    console.log("MovieProvider rendering, movieDataApi:", movieDataApi)
    return (
        <MovieContext.Provider value={{ movieDataApi, reviews, movieReview }}>
            {children}
        </MovieContext.Provider>
    );
}

export const useMovieProvider = () => useContext(MovieContext)
