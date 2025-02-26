import { Link } from "react-router-dom";
import navLinks from "../../params/navLinks";

const EditNotFound = () => {
    return (
        <div className="not-found">
            <h2>Нужно выбрать запись!</h2>
            <p>Для редактирования нужно выбрать конретную запись.</p>
            <p>Используйте кнопку <b>Редактировать</b> в таблице справа от записи.</p>
            <Link to={navLinks[1]['link']}>Вернуться на страницу <b>"{navLinks[1]['name']}"</b></Link>
        </div>
    );
}

export default EditNotFound;