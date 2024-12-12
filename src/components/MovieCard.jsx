import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
    return (

        <>
            <div className="book card">
                <div className="card-body">
                    <h4>{movie.title}</h4>
                    <span className="text-muted">By <span>{movie.director}</span></span>
                    <p className="overview">
                        {movie.release_year}
                    </p>
                    <p className="overview mb-3">
                        {movie.genre}
                    </p>
                    <Link to={`api/movies/${movie.id}`} className="btn btn-primary btn-outline-white">Read more</Link>
                </div>
            </div>
        </>

    )
}