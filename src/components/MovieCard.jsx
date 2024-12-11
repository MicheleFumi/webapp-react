import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
    return (

        <>
            <div className="book card">
                <div className="card-body">
                    <h4>{movie.titolo}</h4>
                    <span className="text-muted">By <span>{movie.regista}</span></span>
                    <p className="overview mb-3">
                        {movie.anno}
                    </p>
                    <Link to={`/books/${movie.id}`} className="btn btn-primary btn-outline-white">Read more</Link>
                </div>
            </div>
        </>

    )
}