import navLinks from "../../params/navLinks";

const Nav = () => {
    return (
             <nav className="project-nav">
                <div className="project-nav__links-wrapper">
                    {navLinks.map( (navLink) => (
                        <a key={navLink.id} href={navLink.link}>{navLink.name}</a>    
                    ))}
                </div>
             </nav>
      );
}

export default Nav;
