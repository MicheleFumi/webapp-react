export default function Jumbotron({ title, subtitle, description, movie_category }) {
    return (
        <div className="px-5 mb-4 bg-secondary ">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{title}</h1>
                <h3 className="text-muted">{subtitle}</h3>
                <p className="col-md-8 fs-4">
                    {description}
                </p>
                <p className="col-md-8 fs-5">
                    {movie_category}
                </p>

            </div>
        </div>

    )
}