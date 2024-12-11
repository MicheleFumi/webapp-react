export default function ReviewCard({ review }) {
    return (
        <>
            <div className="review card mb-3">
                <div className="card-body">
                    <p>{review.commento}</p>
                    <span className="text-muted">By: {review.nome}</span>

                    <div className="vote mt-3" >
                        <strong>Vote:{review.voto}/5</strong>

                    </div>

                </div>
            </div>
        </>
    )
}
