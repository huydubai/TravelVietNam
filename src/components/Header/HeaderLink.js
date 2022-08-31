function HeaderLink({ links, menuOpen }) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="nav-link" onClick={() => menuOpen(false)}>
                    <a href={link.href}>
                        {link.title}
                    </a>
                </li>
            ))}
        </>
    );
}

export default HeaderLink;