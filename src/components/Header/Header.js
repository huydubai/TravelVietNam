import { leftLinks, rightLinks } from '../../data'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/navLogo.svg'
import HeaderLink from './HeaderLink'
function Header() {
    return (
        <nav className='w-full z-50 text-center absolute'>
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
            </div>
        </nav>

    );
}

export default Header;