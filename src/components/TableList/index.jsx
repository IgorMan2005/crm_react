import badges from "../../data/badgets";
import statuses from "../../data/statuses";

const TableList = ({ students}) => {
        
	return (
        <>
            {students.map((student) => (

                <tr key={student.id}>
                    <th scope="row">{student.id}</th>
                    <td>{student.date}</td>
                    <td>{student.product}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                        <div className={`badge badge-pill ${badges[student.status]}`}>
                            {statuses[student.status]}
                        </div>
                    </td>
                    <td>
                        <a href="edit.html">Редактировать</a>
                    </td>
                </tr>
                ))}

        </>
    )
};

export default TableList;
