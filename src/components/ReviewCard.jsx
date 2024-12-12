export default function ReviewCard({ review, ratingStars }) {




    return (
        <>
            <div className="review card mb-3">
                <div className="card-body">
                    <p>{review.text}</p>
                    <span className="text-muted">By: {review.name}</span>

                    <div className="vote mt-3" >
                        <strong>Vote: {ratingStars(review.vote)}</strong>

                    </div>

                </div>
            </div>
        </>
    )
}
