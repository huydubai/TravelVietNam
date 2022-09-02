import ImageHeader from '../../components/ContentTourPage/ImageHeader'
import TipsHeader from '../../components/ContentTourPage/TipsHeader';
import historySrc from '../../assets/Tips/History/historySrc.jpg'
import { histories } from '../../data'
function HistoryTipPage() {
    return (
        <div className="section bg-green-50">
            <div className="section-center">
                <ImageHeader imageSrc={historySrc} />
                <div className='border-b-2 border-b-gray-200 md:w-3/5 w-full text-center md:text-left mx-auto md:pl-2 '>
                    <TipsHeader
                        title="Vietnam has been ranked one of the safest countries in the world for travelers, however it always pays to be prepared."
                        author="Huy Nguyen"
                        date="28 November 2021"
                    />
                </div>
                <div className='tip-container'>
                    {histories.map(history => (
                        <div key={history.id} className='mt-4'>
                            <h3 className='tip-title'>
                                Weather in {history.title}
                            </h3>
                            {history.info.map(item => (
                                <p key={item} className='tip-text mt-2'>{item}</p>
                            ))}
                            <img src={history.imageSrc} alt=''
                                className='tip-img'
                            />
                            <p className='notice'>{history.notice}</p>
                            <ul className='pl-2'>
                                {history.desc.map(des => (
                                    <li><span className='font-bold'>{des.place}</span>
                                        :
                                        <span>{des.content}</span></li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default HistoryTipPage;