export default function ReviewForm() {

    function HandleFormSubmit(e) {
        e.preventDefault()
        console.log('here');

    }
    return (
        <div className="container">
            <div className=" card">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}></form>
                </div>
            </div>
        </div>

    )
}