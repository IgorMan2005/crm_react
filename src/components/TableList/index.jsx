import { Link } from "react-router-dom";

import navLinks from "../../params/navLinks";
import badges from "../../params/badgets";
import statuses from "../../params/statuses";
import products from "../../params/products";
import getArrayData from "../../utils/getArrayData";

const TableList = ({ students}) => {

    
	return (
        <>
            {students.map((student) => (                

                <tr key={student.id}>
                    <th scope="row">{student.id}</th>
                    <td>{student.date.toString()}</td>
                    <td>                        
                        { getArrayData(products, student.product) }
                    </td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                        <div className={`badge badge-pill ${badges[student.status]}`}>
                            { getArrayData(statuses, student.status) }
                        </div>
                    </td>
                    <td>
                        <Link to={`${navLinks[2]['link']}/${student.id}`}>                                                
                            Редактировать
                        </Link>
                    </td>
                </tr>
                ))}

        </>
    )
};

export default TableList;
