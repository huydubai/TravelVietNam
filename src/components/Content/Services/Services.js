import { services } from "../../../data";
import SectionTitle from "../SectionTitle";
import Service from "./Service";

function Services() {
    return (
        <section className="section bg-gray-100" id="services">
            <SectionTitle title="Our Service" />
            <div className="section-center bg-gray-50 rounded-3xl">
                <div className="flex flex-wrap">
                    {services.map(service => (
                        <Service key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;