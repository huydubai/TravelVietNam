import Header from "../components/Header";
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
function Layouts() {
    return (
        <div>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layouts;