
import Jumbotron from "../components/Jumbotron";
import MovieCard from "../components/MovieCard";
import { useMovieProvider } from "../context/MovieContext";

export default function MoviesPage() {

    /*  const movies = [
         {
             id: 1,
             titolo: "Pulp Fiction",
             regista: "Quentin Tarantino",
             anno: 1994
         },
         {
             id: 2,
             titolo: "Il padrino",
             regista: "Francis Ford Coppola",
             anno: 1972
         },
         {
             id: 3,
             titolo: "Inception",
             regista: "Christopher Nolan",
             anno: 2010
         },
         {
             id: 4,
             titolo: "Fight Club",
             regista: "David Fincher",
             anno: 1999
         },
         {
             id: 5,
             titolo: "Matrix",
             regista: "Lana Wachowski, Lilly Wachowski",
             anno: 1999
         },
         {
             id: 6,
             titolo: "C'era una volta in America",
             regista: "Sergio Leone",
             anno: 1984
         },
         {
             id: 7,
             titolo: "Forrest Gump",
             regista: "Robert Zemeckis",
             anno: 1994
         },
         {
             id: 8,
             titolo: "Il cavaliere oscuro",
             regista: "Christopher Nolan",
             anno: 2008
         },
         {
             id: 9,
             titolo: "La La Land",
             regista: "Damien Chazelle",
             anno: 2016
         },
         {
             id: 10,
             titolo: "Parasite",
             regista: "Bong Joon-ho",
             anno: 2019
         }
     ]; */

    const { movieDataApi } = useMovieProvider()
    console.log(movieDataApi);

    return (
        <>
            <Jumbotron title='The Movie Forum' subtitle='discover new film, suggested by people' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
            <section className="my-4">
                <div className="container">
                    <h2 className="pb-3">Movie Overview</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">

                        {movieDataApi?.length > 0 ? (
                            movieDataApi.map(movie => (
                                <div className="col" key={movie.id || movie.title}>
                                    <MovieCard movie={movie} />
                                </div>
                            ))
                        ) : (
                            <p>Caricamento in corso o nessun film disponibile.</p>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}
