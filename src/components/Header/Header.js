import { leftLinks, rightLinks } from '../../data'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/navLogo.svg'
import HeaderLink from './HeaderLink'
import { useEffect, useState } from 'react'
function Header() {
    const [stickyItem, setStickyItem] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [stickyItem])
    const handleScroll = () => {
        setStickyItem(window.pageYOffset > 600)
    }
    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className={`w-full z-50 text-center absolute ${stickyItem
            ? 'font-expletus animate-fade-in-down sticky top-0 bg-gray-50 shadow-sm'
            : ''
            }`}
        >
            <div className='flex items-center justify-between section-center'>
                <ul className='nav-links-container'>
                    <HeaderLink links={leftLinks} />
                </ul>
                <Link to="/" className='flex items-center'>
                    <img src={logo} alt="" className='w-8 h-8' />
                    <span className='company-name sm:text-2xl uppercase font-semibold ml-2'>Travel VietNam</span>
                </Link>
                <ul className='nav-links-container'>
                    <HeaderLink links={rightLinks} />
                </ul>
                <div className='lg:hidden'>
                    <button
                        title='Open Menu'
                        className='p-2 mr-1 transition duration-200 rounded hover:scale-125'
                        onClick={handleOpenMenu}
                    >
                        <svg className="w-5 text-black sm:w-8w" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute animate-fade-in-down top-0 left-0 w-full p-6 border rounded shadow-sm bg-green-50">
                            <div className="flex justify-between">
                                <Link to="/" className='flex items-center'>
                                    <img src={logo} alt="" className='w-8 h-8' />
                                    <span className='company-name'>Travel VietNam</span>
                                </Link>
                                <button
                                    title='Close Menu'
                                    onClick={handleOpenMenu}
                                >
                                    <svg className="w-8 text-gray-600" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className="text-left">
                                <ul className='py-4'>
                                    <HeaderLink links={leftLinks} setIsMenuOpen={setIsMenuOpen} />
                                    <HeaderLink links={rightLinks} setIsMenuOpen={setIsMenuOpen} />
                                </ul>
                            </nav>
                        </div>

                    )}
                </div>
            </div>
        </nav>

    );
}

export default Header;