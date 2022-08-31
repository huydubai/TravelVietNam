import { About, FeaturedTours, Intro, Services, Places, NewTours, Reviews, Promotion, Blogs, TravelTips, WhyUs } from "../../components/Content";

function Home() {
    return (
        <>
            <Intro />
            <About />
            <Services />
            <FeaturedTours />
            <Places />
            <NewTours />
            <Reviews />
            <Promotion />
            <Blogs />
            <TravelTips />
            <WhyUs />
        </>
    );
}

export default Home;