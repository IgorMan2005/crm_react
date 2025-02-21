import filterStatusData from "../../params/filterStatusData";

const FilterStatus = () => {
        
	return (
        
        <div id="topStatusBar" className="btn-group" role="group">
            {filterStatusData.map((status) => (
                // console.log("status.id", status.id)                
                <a key={status.id} href="#" className="btn btn-light" data-value={status.id}>{status.name}</a>                
            ))}        
        </div>
    
     );
}

export default FilterStatus;