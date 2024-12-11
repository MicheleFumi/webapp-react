import { NavLink } from "react-router-dom"
export default function AppHeader() {

    return (
        <>
            <header className='bg-dark text-white py-3 px-4 shadow'>
                <nav>
                    <NavLink to="/" className="text-decoration-none">
                        <h1>The Movie Forum</h1>
                    </NavLink>

                </nav>




            </header>


        </>
    )
}