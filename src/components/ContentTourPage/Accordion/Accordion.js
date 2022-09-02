import { useState } from 'react'
function Accordion({ title, infor, active }) {
    const [showInfo, setShowInfo] = useState(active)
    return (
        <div>
            <header className="flex justify-between items-center bg-gray-100 mb-4 p-4 text-lg sm:text-xl md:text-2xl font-semibold">
                <h4>{title}</h4>
                <button onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 sm:h-8 sm:w-8 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 sm:h-8 sm:w-8 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    )}
                </button>
            </header>
            {showInfo && title === 'Itinerary' &&
                infor.map((info, index) => (
                    <div key={index} className='ml-2'>
                        <h3 className="mt-4 text-lg font-bold">
                            Day {index + 1}: {info.highLight}
                        </h3>
                        {info.details.map((desc, i) => (
                            <p key={i} className='pl-3 my-3'>- {desc}</p>
                        ))}
                    </div>
                ))}
            {showInfo && title !== 'Itinerary' && (
                <ul className='list-disc'>
                    {infor.map((info, index) => (
                        <li key={index}
                            className='my-2 ml-8 px-2'
                        >{info}</li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default Accordion;