
import 'ldrs/ring2'



export default function Loader() {

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <l-ring-2
                size="40"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8"
                color="black"
            ></l-ring-2>
        </div>

    )
}