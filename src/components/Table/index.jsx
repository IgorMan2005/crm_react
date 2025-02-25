import { useEffect, useState } from "react";

import LeftPanel from "../LeftPanel";
import useFetch from "../useFetch";
import TableList from "../TableList";
import jsonServer from "../../params/jsonServer";
import FilterProducts from "../FilterProduct";

import filterStatusData from "../../params/filterStatusData";
import filterProductData from "../../params/filterProductData";
import FilterStatus from "../FilterStatus";


const Table = () => {

	// get info from jsonServer
	const {students, isLoading, error, countNew} = useFetch(jsonServer);
	
	// status by default - all records
	const [status, setStatus] = useState(filterStatusData[0]['id']);
	// product by default - all products
	const [product, setProduct] = useState(filterProductData[0]['id']);

    return ( 
        <div className="with-nav body--dashboard">
        {/* <!-- left-panel --> */}
		{ students && <LeftPanel status={status} setStatus={setStatus} students={students} /> }
		
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
							<FilterStatus status={status} setStatus={setStatus} />
						</div>
						{/* <!-- // Col --> */}

						{/* <!-- Col --> */}
						<div className="col">
							<FilterProducts product={product} setProduct={setProduct} />
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
							{ students && <TableList students={students} status={status} product={product} /> }
						
					</tbody>
				</table>
			</div>
		</div>
		
        </div>
        
     );
}

export default Table;