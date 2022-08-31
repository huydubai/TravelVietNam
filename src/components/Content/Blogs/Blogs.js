import SectionTitle from "../SectionTitle";
import Desc from '../Places/Desc'
import { blogs } from '../../../data.js'
import Blog from "./Blog";

function Blogs() {
    return (
        <section className="section bg-blue-50" id="blogs">
            <SectionTitle title='Blogs' />
            <div className="section-center">
                <Desc
                    title="Vietnam In The News"
                    intro="Our blogs provide all necessary information about Vietnam from culture to destinations, from local food and drink to Vietnam tradition, or festivals and events. Besides, We also give the latest travel news, travel experience, useful advices and tips when traveling to Vietnam."
                />
                <div>
                    <Blog blogs={blogs} color="blue" />
                </div>
            </div>
        </section>
    );
}

export default Blogs;