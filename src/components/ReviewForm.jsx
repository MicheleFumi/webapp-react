
import { useParams } from "react-router-dom";
import { useMovieProvider } from "../context/MovieContext";
import { useState } from "react";



export default function ReviewForm() {

    const { id } = useParams()
    const { addReview, username, text, vote, setUsername, setText, setVote, errorMessage, } = useMovieProvider()

    const [isFormVisible, setIsFormVisible] = useState(false);
    function HandleFormSubmit(e) {
        e.preventDefault()


        addReview(id);


    }
    function HandleFormToggle() {
        setIsFormVisible(isVisible => !isVisible);

    }


    return (
        <div className="container">

            <button onClick={HandleFormToggle} className="btn btn-primary mb-3">
                {isFormVisible ? "Hide Review Form" : "Add a Review"}
            </button>

            <div id="form-card" className={`card mb-3 ${isFormVisible ? "d-block" : "d-none"}`}>

                <div className="card-body">

                    <form onSubmit={HandleFormSubmit}>

                        <div className="mb-3">
                            <label htmlFor="username">name</label>
                            <input name="username" id="username" type="text" className="form-control" placeholder="insert your name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>

                        <div className="vote mb-3">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= vote ? '-fill' : ''} `} onClick={() => setVote(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="text">review</label>
                            <textarea className="form-control" name="text" id="text" placeholder="Leave a review... " value={text} onChange={(e) => setText(e.target.value)} required></textarea>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Send</button>
                            {errorMessage && <span className="text-danger"> <i className="bi bi-x"></i> {errorMessage}</span>}
                        </div>
                    </form>

                </div>
            </div>
        </div >

    )
}