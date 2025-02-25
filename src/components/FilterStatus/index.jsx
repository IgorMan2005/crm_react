import { useEffect } from "react";
import filterStatusData from "../../params/filterStatusData";

const FilterStatus = (props) => {
    
    useEffect(() => {        
        console.log('Filter status:' , props.status);           
        console.log('setStatus type:', typeof(props.setStatus));       
    }, []);
    
    
	return (
        
        <div id="topStatusBar" className="btn-group" role="group">
            {filterStatusData.map((status) => (      
                <a key={status.id} href="#" onClick={() => props.setStatus(status.id)}
                className={"btn btn-light " + (props.status === status.id ? 'active' : '')}                
                data-value={status.id}>{status.name}</a>                
            ))}        
        </div>
    
     );
}

export default FilterStatus;