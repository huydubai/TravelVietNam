import Header from "../components/Header";
import { Outlet } from 'react-router-dom'

function Layouts() {
    return (
        <div>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
        </div>
    );
}

export default Layouts;