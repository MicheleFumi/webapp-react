
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function AppLayout() {
    return (
        <>
            <AppHeader />

            <main className="min-vh-100 bg-latte-menta pb-3">
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}