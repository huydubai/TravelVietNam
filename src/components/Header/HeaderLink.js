function HeaderLink({ links }) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="nav-link">
                    <a href={link.href}>
                        {link.title}
                    </a>
                </li>
            ))}
        </>
    );
}

export default HeaderLink;