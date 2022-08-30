import { About, FeaturedTours, Intro, Services, Places } from "../../components/Content";
function Home() {
    return (
        <>
            <Intro />
            <About />
            <Services />
            <FeaturedTours />
            <Places />
        </>
    );
}

export default Home;