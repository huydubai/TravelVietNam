import ImageHeader from '../../components/ContentTourPage/ImageHeader'
import TipsHeader from '../../components/ContentTourPage/TipsHeader/TipsHeader';
import transportSrc from '../../assets/Tips/Transport/transportSrc.jpg'
import transport from '../../assets/Tips/Transport/transport.jpg'
import transport1 from '../../assets/Tips/Transport/transport1.jpg'
import transport2 from '../../assets/Tips/Transport/transport2.jpg'
import transport3 from '../../assets/Tips/Transport/transport3.jpg'
import transport4 from '../../assets/Tips/Transport/transport4.jpg'
import transport5 from '../../assets/Tips/Transport/transport5.jpg'
function TransportTipPage() {
    return (
        <div className="section bg-green-50">
            <div className="section-center">
                <ImageHeader imageSrc={transportSrc} />
                <div className='border-b-2 border-b-gray-200 md:w-3/5 w-full text-center md:text-left mx-auto md:pl-2 '>
                    <TipsHeader
                        title="Just like the diversity of its landscapes, Vietnam offers a variety of ways to get around."
                        author="Huy Nguyen"
                        date="28 November 2021"
                    />
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Flights in Vietnam
                    </h3>
                    <p className='tip-text'>
                        For those short on time, flying is the most convenient way to see several destinations within Vietnam. Many travellers underestimate the distance (and state of the roads) between cities and opt for buses or trains instead of flying. It's good to note that train rides from Hanoi to Ho Chi Minh City can run up to 30 hours, and from Central Vietnam to either point, 16 hours is quite common. In light of this, it makes a lot of sense to opt for a one- or two-hour plane ride and spend more time in your destination. Prices for domestic tickets are surprisingly reasonable, and there are daily flights to all of the country's top destinations.
                    </p>
                    <img src={transport} alt=''
                        className='tip-img'
                    />
                    <p className='tip-text'>Vietnam Airlines is the national carrier and has the most flights daily, while Vietjet, Bamboo Airways and Pacific Airlines both offer affordable deals for short hops around the country.</p>
                </div>
                <div className='tip-container'>
                    <img src={transport1} alt=''
                        className='tip-img'
                    />
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Trains in Vietnam
                    </h3>
                    <p className='tip-text'>Averaging about 40km an hour, Vietnams trains are an insightful and relaxing way to journey through the country. The North and South are connected by a single, 2,600km-track network managed by Vietnam Railways</p>
                    <img src={transport2} alt=''
                        className='tip-img'
                    />
                    <p className='tip-text'>
                        The track snakes through the country from Ho Chi Minh City all the way to the Chinese border. Spring for the soft seats and four-berth cabins for a little extra comfort, or splurge on one of the private tourist sleeping cars that are now available for The railroad line is undergoing renovations as much of the existing tracks date back to colonial times, so be sure to research before you go.
                    </p>
                    <p className='tip-text'>
                        <strong>Hanoi Train Station Address:</strong> 120 Lê Duẩn, Cửa Nam, Hoàn Kiếm, Hà Nội, Vietnam
                        <strong>Ho Chi Minh City Train Station Address:</strong> 1 Nguyễn Thông, phường 9, Quận 3, Hồ Chí Minh, Vietnam
                    </p>
                    <strong>Buying train tickets in Vietnam:</strong>
                    <ul className='pl-1'>
                        <li>
                            You can buy your train tickets at counters in Vietnams train stations days or months in advance of your trip, depending on the route. Train tickets are also sold through many travel agencies and online through Vietnam official train ticketing website
                        </li>
                        <li>
                            Children above 5 years old are charged the full ticket price.
                        </li>
                        <li>
                            All trains have western and squat toilets on both ends of every carriage.
                        </li>
                        <li>
                            Luggage transport and freight forward service is available on Reunification Express Trains (see below.)
                        </li>
                    </ul>

                    <p className='verticalRight'>
                        If you're traveling during Vietnamese holidays and peak times, be sure to book your train tickets well in advance. On ordinary days its still a good idea to buy your tickets a few days early. If you're trying to buy tickets for same-day travel, you can expect the faster trains and best seats to be taken.
                    </p>
                    <strong>The Reunification Express</strong>
                    <p className='tip-text'>The Reunification Express isn’t really a train. Its a line connecting Hanoi and Ho Chi Minh City, completed by the French in 1936. The <strong>36-hour</strong> scenic ride makes stops in Hue, Danang, Nha Trang, and Phan Thiet.</p>
                    <p className='tip-text'>A slow but memorable journey, five Reunification Express services run daily (7:30PM; 10PM; 6AM; 9AM; 1:10PM) from both Hanoi and Ho Chi Minh City. There are four classes to choose from: hard seat, soft seat, hard sleeper, and soft sleeper. The cabins are divided into four berths with simple bedding provided.</p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Trains in Vietnam
                    </h3>
                    <img src={transport3} alt=''
                        className='tip-img'
                    />
                    <p className='tip-text'>The trains in Vietnam aren’t a good idea to buy your tickets a few days early. If youre trying to buy tickets for same-day travel, you canOpen-tour buses are an increasingly popular service for budget travelers, especially in Vietnam southern and central regions. Buses run regularly and reliably between top destinations such as Hanoi, Hue, Hoi An, Nha Trang, Da Lat, Mui Ne, and Ho Chi Minh City.</p>
                    <p className='tip-text'>Most open tour buses are sleeper buses, or have deep reclining chairs. A simple Google search will bring up the most reputed open-tour bus companies. We recommend booking one or two days ahead, unless you're travelling on a Vietnamese holiday: then you'll want to book seats at least two weeks in advance.</p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Motorbikes in Vietnam
                    </h3>
                    <img src={transport4} alt=''
                        className='tip-img'
                    />
                    <p className='tip-text'>
                        Vietnam quintessential mode of transport, motorbikes are the most convenient way to travel short distances. Independent travellers may like to try long-distance motorbiking for the adventure and spectacular views. Novice motorists should be careful on Vietnam streets and observe the local style of driving, which is more ebb and flow than 'follow the rules'. You’ll find motorbike rental shops in almost every city.
                    </p>
                    <p className='tip-text'>
                        Prices depend on the quality of the bike, ranging from 150,000 to 300,000 VND/day for scooters and mopeds. You can expect to leave a deposit or your passport if youre renting for more than a week. When in Vietnam, never park your motorbike unattended,<strong>always wear a helmet</strong>, and be sure to check the ticket number if you leave it in a parking lot.
                    </p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Cycling in Vietnam
                    </h3>
                    <img src={transport5} alt=''
                        className='tip-img'
                    />
                    <p className='tip-text'>
                        Whether you're an avid cyclist or just enjoy a little pedal now and then, Vietnam will reawaken your love for this mode of transport. Although it's possible to cycle in the cities, Vietnam's small towns and beach destinations are perfect for two-wheeled excursions. Some of the country's best guided tours are in fact bicycle tours.
                    </p>
                    <p className='tip-text'>
                        You'll find these in the Mekong Delta and in Central Vietnam. In towns such as Hoi An and Hue, it's possible to get to almost everywhere you want to go by bicycle (many of the locals do.) Rentals are usually about 20,000 to 30,000 VND per day (about 1$.)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TransportTipPage;