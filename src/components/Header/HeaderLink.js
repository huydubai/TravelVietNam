function HeaderLink({ links, setIsMenuOpen }) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                    <a href={link.href}>
                        {link.title}
                    </a>
                </li>
            ))}
        </>
    );
}

export default HeaderLink;