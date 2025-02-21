import filterStatusData from "../../params/filterStatusData";

const FilterStatus = () => {
        
	return (
        
        <div id="topStatusBar" className="btn-group" role="group">
            {filterStatusData.map((status) => (                  
                <a href="#" className="btn btn-light" key={status.id} data-value={status.id}>{status.name}</a>                
            ))}        
        </div>
    
     );
}

export default FilterStatus;