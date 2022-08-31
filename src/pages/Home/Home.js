import {
    About,
    FeaturedTours,
    Intro,
    Services,
    Places,
    NewTours,
    Reviews,
    Promotion,
    Blogs,
    TravelTips,
    WhyUs,
    Contact,
} from "../../components/Content";

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
            <Contact />
        </>
    );
}

export default Home;