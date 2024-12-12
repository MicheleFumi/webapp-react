import { useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import ReviewCard from "../components/ReviewCard";
import { useMovieProvider } from "../context/MovieContext";
import { useEffect } from "react";

export default function SingleMoviePage() {

    const { reviews, movieReview, movieDataApi } = useMovieProvider()
    console.log(reviews);
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            movieReview(id);
        }
    }, [id])

    /*  const reviews = [
         {
             id: 1,
             nome: "Luca Rossi",
             commento: "Un capolavoro di dialoghi e intrecci! Mia Wallace è iconica.",
             voto: 5
         },
         {
             id: 2,
             nome: "Anna Bianchi",
             commento: "La trama è avvincente, ma alcune scene sono un po' lente per i miei gusti.",
             voto: 3
         },
         {
             id: 3,
             nome: "Marco Verdi",
             commento: "Un film che ti tiene incollato allo schermo. La colonna sonora è incredibile.",
             voto: 5
         },
         {
             id: 4,
             nome: "Giulia Fontana",
             commento: "Non capisco tutto l'hype, l'ho trovato confusionario e pretenzioso.",
             voto: 2
         },
         {
             id: 5,
             nome: "Simone Moretti",
             commento: "La rivoluzione del cinema di fantascienza! Effetti speciali senza tempo.",
             voto: 5
         },
         {
             id: 6,
             nome: "Elena Russo",
             commento: "Un'epopea lenta ma intensa. Non per tutti, ma una vera opera d'arte.",
             voto: 4
         },
         {
             id: 7,
             nome: "Paolo Ferri",
             commento: "Una storia toccante, ma forse un po' troppo melodrammatica.",
             voto: 3
         },
         {
             id: 8,
             nome: "Sara Neri",
             commento: "Il miglior film di supereroi mai realizzato. Joker è indimenticabile!",
             voto: 5
         },
         {
             id: 9,
             nome: "Marta Ricci",
             commento: "Colorato e ben fatto, ma la trama è prevedibile.",
             voto: 3
         },
         {
             id: 10,
             nome: "Davide Galli",
             commento: "Un ritratto agghiacciante delle disuguaglianze sociali. Bellissimo.",
             voto: 5
         }
     ]; */

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


    return (
        <>
            <Jumbotron title='The Movie Forum' subtitle='discover new film, suggested by people' description='discover what people says about.' />

            <section>
                <div className="container">
                    {reviews?.length > 0 ? (
                        reviews.map(review => (
                            <ReviewCard key={review.id} review={review} ratingStars={ratingStars} />
                        ))
                    ) : (
                        <p>Caricamento in corso o nessun film disponibile.</p>
                    )}


                </div>
            </section>

        </>
    )
}
