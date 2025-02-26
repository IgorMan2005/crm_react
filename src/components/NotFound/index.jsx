import { Link } from "react-router-dom";
import navLinks from "../../params/navLinks";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Извините!</h2>
            <p>Такая страница не найдена...</p>            
            <Link to={navLinks[0]['link']}>Вернуться на страницу <b>"{navLinks[0]['name']}"</b></Link>
        </div>
    );
}

export default NotFound;