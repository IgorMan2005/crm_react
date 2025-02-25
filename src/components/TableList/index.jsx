import { Link } from "react-router-dom";

import navLinks from "../../params/navLinks";
import badges from "../../params/badgets";
import statuses from "../../params/statuses";
import products from "../../params/products";
import getArrayData from "../../utils/getArrayData";
import formatDate from "../../utils/formatDate";
import formatPhone from "../../utils/formatPhone";

const TableList = ({ students, status, product}) => {
    
	return (
        <>
            {students.map(student => (      
                
                (status === student.status || status === 'all' ) 
                && 
                (product === student.product || product === 'all')
                ?
                <tr key={student.id} >
                    <th scope="row">{student.id}</th>
                    <td>{formatDate(student.date)}</td>
                    <td>                        
                        { getArrayData(products, student.product) }
                    </td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{formatPhone(student.phone)}</td>
                    <td>
                        <div className={`badge badge-pill ${badges[student.status]}`}>
                            { getArrayData(statuses, student.status) }
                        </div>
                    </td>
                    <td>
                        <Link to={`${navLinks[2]['link']}/${student.id}`} className="btn btn-primary">                                                
                            Редактировать
                        </Link>
                    </td>
                </tr>
                :
                null

                ))}

        </>
    )
};

export default TableList;
