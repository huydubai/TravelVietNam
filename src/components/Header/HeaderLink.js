function HeaderLink({ links, setIsMenuOpen }) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href}
                        className="nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </>
    );
}

export default HeaderLink;