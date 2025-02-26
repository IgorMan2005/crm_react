import getCountNew from "../../utils/getCountNew";
import filterStatusData from "../../params/filterStatusData";

// import { useEffect } from "react";

const LeftNavigation = (props) => {

    // useEffect(() => {
    //     console.log('LeftNavigation props:', props);
    // });

    return ( 
            <ul>
            {filterStatusData.map((status) => (      
                <li key={status.id}>
                    <a data-value={status.id} data-role="left-status" 
                     onClick={() => props.setStatus(status.id)} 
                     className={"" + (props.status === status.id ? 'active' : '')}>
                        {status.name}
                        { status.id === 'new' && (
                            <div className="badge" id="badge-new">
                                {getCountNew(props.students)}
                            </div>
                        )}
                    </a>
                </li>                
            ))}   
            </ul>
     );
}

export default LeftNavigation;