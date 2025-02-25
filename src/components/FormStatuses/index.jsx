import { useEffect, useState } from "react";
import statuses from "../../params/statuses";


const FormStatuses = ( selected ) => {

    // Как Преобразовать Объект в Массив (JS)
    // https://only-to-top.ru/blog/coding/2019-11-23-object-to-array.html

    const [currentStatus, setCurrentStatus] = useState(Object.values(selected)[0]);
    
	return (
        <select className="custom-select" id="status" name="status" 
        defaultValue={Object.values(selected)[0]} 
        onChange={(e) => {setCurrentStatus(e.target.value)}} 
        >
            {statuses.map((status) => (                  
                <option key={status.id} value={status.id}>{status.name}</option>                
            ))}
        </select>        
    )
};

export default FormStatuses;
