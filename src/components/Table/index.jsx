import LeftPanel from "../LeftPanel";
import useFetch from "../useFetch";
import TableList from "../TableList";
import jsonServer from "../../params/jsonServer";
import FilterProducts from "../FilterProduct";
import FilterStatus from "../FilterStatus";

const Table = () => {

	const {students, isLoading, error} = useFetch(jsonServer);

    return ( 
        <div className="with-nav body--dashboard">
        {/* <!-- left-panel --> */}
		<LeftPanel />
		{/* <!-- // left-panel --> */}

		{/* <!-- main-wrapper --> */}
		<div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>

				<form action="">
					{/* <!-- <div className="form-row"> --> */}
					<div className="row mb-3 justify-content-start">
						{/* <!-- Col --> */}
						<div className="col">
							<FilterStatus />
						</div>
						{/* <!-- // Col --> */}
						{/* <!-- Col --> */}
						<div className="col">
							<FilterProducts />
						</div>
						{/* <!-- // Col --> */}
					</div>
				</form>

				<table className="table fs-14">
					<thead>
						<tr>
							<th>ID</th>
							<th>дата</th>
							<th>продукт</th>
							<th>имя</th>
							<th>email</th>
							<th>телефон</th>
							<th>статус</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tbody">

							{ error && <div>{error}</div>}
							{ isLoading && <tr><td><h3>Loading...</h3></td></tr>}
							{ students && <TableList students={students} /> }
						
					</tbody>
				</table>
			</div>
		</div>
		
        </div>
        
     );
}

export default Table;