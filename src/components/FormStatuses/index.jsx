import { useEffect } from "react";
import statuses from "../../params/statuses";

const FormStatuses = (selected) => {
    
    // Как Преобразовать Объект в Массив (JS)
    // https://only-to-top.ru/blog/coding/2019-11-23-object-to-array.html

    useEffect(() => {        
        console.dir(statuses);
        console.log('Select status:', Object.values(selected)[0]);        
    })
    
	return (
        <select className="custom-select" id="status" name="status" defaultValue={Object.values(selected)[0]}>
            {statuses.map((status) => (                  
                <option key={status.id} value={status.id}>{status.name}</option>                
            ))}
        </select>
    )
};

export default FormStatuses;
