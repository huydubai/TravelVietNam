
import SectionTitle from '../SectionTitle'
import PlacesIntro from './PlacesIntro'
import { placesToGo } from '../../../data'
import Place from './Place';
function Places() {
    return (
        <section>
            <SectionTitle title="Place To Go" />
            <div className='section-center'>
                <PlacesIntro
                    title="Explore the best places in Vietnam"
                    intro="Choose from the best holiday destinations in Vietnam. And best of all, it’s quarantine-free for the fully vaccinated. You are free to enjoy full holiday access upon arrival. Take in new sites, sounds, and flavors. Experiences that are truly memorable. Live fully in Vietnam."
                />
                <div className='flex flex-wrap md:-m-2 -m-1'>
                    <div className="places-container">
                        {placesToGo.slice(0, 3).map((place, index) => (
                            <Place
                                key={place.id}
                                place={place}
                                half={index !== placesToGo.slice(0, 3).length - 1}
                            />
                        ))}
                    </div>
                    <div className="places-container">
                        {placesToGo.slice(3, placesToGo.length).map((place, index) => (
                            <Place
                                key={place.id}
                                place={place}
                                half={index !== 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Places;