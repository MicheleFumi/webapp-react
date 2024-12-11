export default function ReviewCard({ review, ratingStars }) {




    return (
        <>
            <div className="review card mb-3">
                <div className="card-body">
                    <p>{review.commento}</p>
                    <span className="text-muted">By: {review.nome}</span>

                    <div className="vote mt-3" >
                        <strong>Vote: {ratingStars(review.voto)}</strong>

                    </div>

                </div>
            </div>
        </>
    )
}
