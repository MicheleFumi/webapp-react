
import Jumbotron from "../components/Jumbotron";
import MovieCard from "../components/MovieCard";
import { useMovieProvider } from "../context/MovieContext";
import Loader from "../components/loader";


export default function MoviesPage() {


    const { movieDataApi, loading } = useMovieProvider()

    if (loading) {
        return <Loader />;
    }



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
