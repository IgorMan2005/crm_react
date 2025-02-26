import {Link} from 'react-router-dom'
import navLinks from "../../params/navLinks";

const Nav = () => {
    return (
             <nav className="project-nav">
                <div className="project-nav__links-wrapper">
                    {navLinks.map( (navLink) => (                        
                        <Link key={navLink.id} to={navLink.link}>{navLink.name}</Link>
                    ))}
                </div>
             </nav>
      );
}

export default Nav;
