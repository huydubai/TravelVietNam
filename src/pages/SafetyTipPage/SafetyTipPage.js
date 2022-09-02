import ImageHeader from '../../components/ContentTourPage/ImageHeader'
import TipsHeader from '../../components/ContentTourPage/TipsHeader';
import safetySrc from '../../assets/Tips/Safety/safetySrc.jpg'
import safety from '../../assets/Tips/Safety/safety.jpg'
import safety1 from '../../assets/Tips/Safety/safety1.jpg'
import safety2 from '../../assets/Tips/Safety/safety2.jpg'
import safety3 from '../../assets/Tips/Safety/safety3.jpg'
import safety4 from '../../assets/Tips/Safety/safety4.jpg'
function SafetyTipPage() {
    return (
        <div className='section bg-green-50'>
            <div className='section-center'>
                <ImageHeader imageSrc={safetySrc} />
                <div className='border-b-2 border-b-gray-200 md:w-3/5 w-full text-center md:text-left mx-auto md:pl-2 '>
                    <TipsHeader
                        title="Vietnam has been ranked one of the safest countries in the world for travelers, however it always pays to be prepared."
                        author="Huy Nguyen"
                        date="28 November 2021"
                    />
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        CORONAVIRUS CONCERNS
                    </h3>
                    <p className='notice'>Health services and prevention measures</p>
                    <p className='tip-text'>
                        Vietnam has closely monitored the novel coronavirus (COVID-19) outbreak since its start, and has installed a series of proactive, comprehensive measures to ensure the safety of its citizens and travelers.
                    </p>
                    <p className='tip-text'>
                        Travelers experiencing symptoms of the virus — fever, cough and difficulty breathing — should immediately call Vietnam’s health hotline: 19003228.
                    </p>
                    <p className='verticalRight'>
                        To combat the spread of the virus, Vietnam Ministry of Health has ordered all Vietnamese and foreigners in the country to wear face masks on flights, in airport terminals, and in crowded public places such as supermarkets, bus stations, and public transport vehicles.
                    </p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        HEALTH TIPS FOR TRAVELING VIETNAM
                    </h3>
                    <img src={safety} alt=''
                        className='tip-img'
                    />
                    <p className='notice'>Before you go</p>
                    <p className='tip-text'>
                        Before traveling to Vietnam, be sure to purchase <strong>insurance</strong> for your trip. Two months before you leave, you should also consult your doctor or local travel clinic for the latest information on health risks in Vietnam and to receive any <strong>vaccinations</strong> you may need.
                    </p>
                    <p className='tip-text'>
                        <strong>Pregnant</strong> women should consult their doctors for specialized advice. Anti-malarial drugs and many diarrhoea treatments are not completely safe during pregnancy.
                    </p>
                    <p className='tip-text'>
                        If you have a medical condition or allergy of which requires particular attention, carry a <strong>doctor’s letter</strong> with you that describes the nature of the condition and treatment needed. We also recommend you pack a medical kit with:
                    </p>
                    <ul className='list-disc pl-6'>
                        <li>DIET-based insect repellent</li>
                        <li>Paracetemol or ibuprofen for pain relief</li>
                        <li>Anti-itch ointment, such as hydrocortison</li>
                        <li>Sunscreen</li>
                        <li>Antihistamine for allergy treatment, such as zertec, benadryl</li>
                        <li>Bacitracin for wound care, such as neosporin</li>
                        <li>Diarrhoea treatment, such as imodium</li>
                    </ul>
                    <p className='verticalRight'>
                        Some medications can be difficult to find in Vietnam: be sure you travel with a full supply of any prescribed medicine you need.
                    </p>
                    <p className='notice'>Hospitals in Vietnam</p>
                    <p className='tip-text'>
                        Major cities such as Hanoi, Danang, and Ho Chi Minh City have a number of state-owned and private hospitals with English-speaking staff. While small pharmacies are common in almost any Vietnamese city, in the rural areas you may be far from the nearest pharmacy or hospital.
                    </p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        COMMON HEALTH ISSUES IN VIETNAM
                    </h3>
                    <img src={safety1} alt=''
                        className='tip-img'
                    />
                    <p className='notice'>Pollution in Vietnam</p>
                    <p className='tip-text'>
                        Air pollutants may aggravate <strong>asthma</strong> and <strong>allergy</strong> symptoms. Symptoms include scratchy throat and nasal drip. For anyone with respiratory ailments, invest in a small mask while traveling around metropolitan areas, or plan to spend more time in the countryside if possible.
                    </p>
                    <p className='notice'>Mosquito-borne diseases in Vietnam</p>
                    <p className='tip-text'>
                        The risk of contracting <strong>malaria</strong> is heightened in the rural highlands. Consider taking anti-malarial medication if you plan to travel to any remote destinations in Vietnam.<strong>Dengue fever</strong> has become increasingly problematic in Southeast Asia and occurs mostly in the Mekong Delta, including Ho Chi Minh City. With no vaccines available, the best preventive measure is to wear bug spray during the hours of sunrise and sunset.
                    </p>
                    <p className='notice'>Hospitals in Vietnam</p>
                    <p className='tip-text'>
                        Major cities such as Hanoi, Danang, and Ho Chi Minh City have a number of state-owned and private hospitals with English-speaking staff. While small pharmacies are common in almost any Vietnamese city, in the rural areas you may be far from the nearest pharmacy or hospital.
                    </p>
                    <img src={safety2} alt=''
                        className='tip-img'
                    />
                    <p className='notice'>Heat concerns</p>
                    <p className='tip-text'>
                        Vietnam tends to be hot and humid year round. Don’t underestimate the strength of the sun. <strong>Sunburn</strong> can happen quickly: it's best to wear sunscreen throughout the day. Be vigilant with reapplication, especially at beach-side destinations. <strong>Dehydration</strong> is another concerns, as well as heat exhaustion, which may show up in symptoms such as headaches and irritability. <strong>Drink plenty of water</strong>. Heatstroke is a more serious consequence of overexposure to sun and may require hospital treatment. If you're feeling weak, dizzy, nauseous, and have a temperature of over 41°C, get medical help immediately.
                    </p>
                    <p className='notice'>Food-related illnesses</p>
                    <p className='tip-text'>
                        <strong>Traveler’s</strong> diarrhoea is a common concern when in new countries. Stick to bottled water and avoid ice in rural areas. To avoid contracting bacteria, look for restaurants with a high turnover of customers and those that prepare freshly cooked food. Generally street food in Vietnam is quite safe, but always use your own judgement when choosing from vendors. If you experience stomach upsets or diarrhoea, take rehydration salts and stay hydrated. If the problems persist, seek medical attention.
                    </p>
                    <p className='notice'>Critter bites</p>
                    <p className='tip-text'>
                        These're sometimes an issue when when staying in hostels and other shared dormitories, and sometimes even in hotels. Seek help at the nearest clinic if you're suffering from the bites of <strong>fleas, bed bugs, and/or lice</strong>. Be on the lookout for rabies when in contact with animals, wild or domesticated. Avoid the monkeys on Cat Ba Island when touring Ha Long Bay. When jungle trekking, be wary of ticks, leeches and <strong>poisonous snakes</strong> lurking in the undergrowth. Seek medical assistance immediately if bitten.
                    </p>

                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        SAFETY TIPS FOR TRAVELING VIETNAM
                    </h3>
                    <img src={safety3} alt=''
                        className='tip-img'
                    />
                    <p className='notice'>Patty theft</p>
                    <p className='tip-text'>
                        Vietnam is a relatively safe country, however petty theft is a legitimate concern, especially in the big cities. Refrain from extending cameras and cellphones on busy streets and corners: most robberies are <strong>drive-by snatchings</strong>. When taking pictures on sidewalks, keep your camera close to your body and away from the flow of traffic.
                    </p>
                    <p className='tip-text'>
                        Women in particular should be warned to <strong>keep a tight grip</strong> on their bags and purses when walking in Ho Chi Minh City. When riding a motorcycle, place your bags in the seat compartment or hook them in the front of the bike. Bags carried around the shoulder or in bike baskets can easily be snatched.
                    </p>
                    <p className='tip-text'>
                        When staying in hotels and guesthouses, place your valuables <strong>in the safe</strong> or lock them in your bags before leaving your room. It is a good idea in general to be mindful of your valuables, keep a close eye on your bags and not to flaunt large amounts of cash or expensive gadgets in rural areas.
                    </p>
                    <p className='tip-text'>
                        Unfortunately, if you find yourself the victim of theft, little can be done by law enforcement to recover stolen belongings.
                    </p>
                    <p className='notice'>Taxi scams</p>
                    <p className='tip-text'>
                        Taxi scams in Vietnam's take the form of rigged meters, overcharging, confusing currency and fixed prices. Two trusted companies you can rely on are <strong>Mai Linh and Vinasun</strong>. Both of these taxi companies have new vehicles and sealed metres, they also have a pick-up service that works in most Vietnamese towns and cities. You can look for them as soon as you land in Vietnam's international airports.
                    </p>
                    <img src={safety4} alt=''
                        className='tip-img'
                    />
                    <p className='notice'>Tourist Scams</p>
                    <p className='tip-text'>
                        Vietnam is constantly improving its tourism services, however there are still some agents and independent operators who flout the rules. When booking cruises on Halong Bay, always go with reputed companies. For tours around Vietnam, book with vetted travel agents as opposed to hole-in-the-wall establishments to avoid being scammed.
                    </p>
                    <p className='notice'>For female travelers</p>
                    <p className='tip-text'>
                        Vietnam's generally a safe country to travel and female travelers will find themselves welcome. The Vietnamese are still quite conservative, so it's best to respect the local culture by not baring too much skin.
                    </p>
                    <p className='tip-text'>
                        Solo female travelers can expect to be approached with questions about why they are traveling alone. The enquiries are usually harmless and borne out of curiousity. Crime against women is uncommon in Vietnam. Nonetheless it's wise to not be alone on the streets late at night, and to take a taxi if you're heading back late.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SafetyTipPage;