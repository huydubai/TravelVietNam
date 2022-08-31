import { Link } from "react-router-dom";


function TravelTip({ tip }) {
    const { id, title, icon } = tip
    return (
        <div>
            <Link to={`tips/${title}`} key={id}>
                <div className="flex flex-col items-center bg-gray-100 text-center border-green-200 border-2 hover:bg-green-50 hover:scale-110 transition duration-300 ease-in">
                    <img src={icon} alt={title}
                        className="w-12 h-12 sm:w-16 sm:w16 p-2 box-content"
                    />
                    <p className="capitalize text-base sm:text-lg md:text-2xl py-2 px-0 font-semibold italic">{title}</p>
                </div>
            </Link>
        </div >
    );
}

export default TravelTip;