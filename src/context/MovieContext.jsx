import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext()

export default function MovieProvider({ children }) {
    const [movieDataApi, setMovieDataApi] = useState([])
    const [reviews, setReviews] = useState({})
    const [username, setUsername] = useState('')
    const [text, setText] = useState('')
    const [vote, setVote] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)

    const url = 'http://localhost:3001/'
    const endpoint = 'api/movies/'




    function fetchMovieData() {
        fetch(`${url}${endpoint}`)
            .then(resp => resp.json())
            .then(data => {


                setMovieDataApi(data.movies)



            }
            )
    }

    function movieReview(id) {
        const reviewEndpoint = `api/movies/${id}`
        fetch(`${url}${reviewEndpoint}`)
            .then(resp => resp.json())
            .then(data => {


                setReviews(data.reviews)



            }
            )

    }


    function addReview(id) {


        const formData = {
            username,
            text,
            vote,
        }
        if (username.length < 5 || text.length < 15 || vote == 0) {
            setErrorMessage('Please fill all the fields')
            return;

        } else {
            setErrorMessage(null)
        }
        fetch(`${url}${endpoint}${id}/review`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                movieReview(id);


            })
            .catch(err => console.log(err))

        setUsername('')
        setText('')
        setVote(0)

    }







    useEffect(() => {
        fetchMovieData()


    }, [])





    return (
        <MovieContext.Provider value={{
            movieDataApi, reviews, movieReview, addReview, username, text, vote, setUsername, setText, setVote, errorMessage,
        }}>
            {children}
        </MovieContext.Provider>
    );
}
export const useMovieProvider = () => useContext(MovieContext)
