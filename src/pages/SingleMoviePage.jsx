import { NavLink, useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import ReviewCard from "../components/ReviewCard";
import { useMovieProvider } from "../context/MovieContext";
import { useEffect } from "react";
import ReviewForm from "../components/ReviewForm";


export default function SingleMoviePage() {

    const { reviews, movieReview, movieDataApi } = useMovieProvider()

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            movieReview(id);
        }
    }, [id])



    const ratingStars = (vote) => {
        const rating = vote
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="bi bi-star-fill"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star"></i>);
            }
        }
        return stars;
    }


    const movie = movieDataApi.find(movie => movie.id == id)


    return (
        <>

            {movie ? (
                <Jumbotron title={movie.title} subtitle={`${movie.director}, ${movie.release_year}`} description={movie.abstract} movie_category={movie.genre} />
            ) : (
                <p>Film non trovato.</p>
            )}


            <section>
                <div className="container">
                    <ReviewForm />
                </div>
            </section>


            <section>
                <div className="container">
                    {reviews?.length > 0 ? (
                        reviews.map(review => (
                            <ReviewCard key={review.id} review={review} ratingStars={ratingStars} />
                        ))
                    ) : (
                        <p>Caricamento in corso o nessun film disponibile.</p>
                    )}

                    <NavLink to="/" className="btn btn-primary btn-outline-white">
                        <i class="bi bi-arrow-left"></i>
                        <span> back to movie list</span>

                    </NavLink>
                </div>
            </section>

        </>
    )
}
