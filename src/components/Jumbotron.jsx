export default function Jumbotron({ title, subtitle, description }) {
    return (
        <div className="p-5 mb-4 bg-secondary ">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{title}</h1>
                <h3 className="text-muted">{subtitle}</h3>
                <p className="col-md-8 fs-4">
                    {description}
                </p>

            </div>
        </div>

    )
}