
import { Link } from 'react-router-dom'
function Place({ place, half }) {
    return (
        <Link
            to={`places/${place.name}`}
            className={`${half ? 'place-half-link' : ''} place-link group`}
        >
            <img src={place.imageSrc} alt="" className='place-img' />
            <div>
                <h1 className='place-title font-expletus'>{place.name}</h1>
            </div>
        </Link>

    );
}

export default Place;