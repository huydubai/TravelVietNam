import ImageHeader from '../../components/ContentTourPage/ImageHeader'
import TipsHeader from '../../components/ContentTourPage/TipsHeader/TipsHeader';
import weatherSrc from '../../assets/Tips/Weather/weatherSrc.jpg'
import { weathers } from '.././../data'
function WeatherTipPage() {
    return (
        <div className='section bg-green-50'>
            <div className="section-center">
                <ImageHeader imageSrc={weatherSrc} />
                <div className='border-b-2 border-b-gray-200 md:w-3/5 w-full text-center md:text-left mx-auto md:pl-2 '>
                    <TipsHeader
                        title="Vietnam’s unique geography creates a range of weather patterns, with both tropical and temperate zones."
                        author="Huy Nguyen"
                        date="28 November 2021"
                    />
                </div>
                <div className='tip-container'>
                    {weathers.map(weather => (
                        <div key={weather.id} className='mt-4'>
                            <h3 className='tip-title'>
                                Weather in {weather.title}
                            </h3>
                            <img src={weather.imageSrc} alt=''
                                className='tip-img'
                            />
                            <ul className='pl-2'>
                                {weather.info.map(item => (
                                    <li key={item.id}>
                                        <span className='font-bold'>{item.stage}</span>
                                        :
                                        <span> {item.type}</span>
                                    </li>
                                ))}
                            </ul>
                            {weather.desc.map(w => (
                                <p key={w} className='tip-text mt-2'>{w}</p>
                            ))}
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default WeatherTipPage;

