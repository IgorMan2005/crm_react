import LeftPanel from "../LeftPanel";
import useFetch from "../useFetch";
import TableList from "../TableList";


const Table = () => {

	const {students, isLoading, error} = useFetch('https://amplified-rich-spice.glitch.me/students');

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
							<div id="topStatusBar" className="btn-group" role="group" aria-label="...">
								<a href="#" className="btn btn-light" data-value="all">Все</a>
								<a href="#" className="btn btn-light" data-value="new">Новые</a>
								<a href="#" className="btn btn-light" data-value="inwork">В работе</a>
								<a href="#" className="btn btn-light" data-value="complete">Завершенные</a>
							</div>
						</div>
						{/* <!-- // Col --> */}
						{/* <!-- Col --> */}
						<div className="col">
							<select className="custom-select" id="productSelect" defaultValue="all">
								<option value="all">Все продукты</option>
								<option value="course-html">Курс по верстке</option>
								<option value="course-js">Курс по JavaScript</option>
								<option value="course-vue">Курс по VUE JS</option>
								<option value="course-php">Курс по PHP</option>
								<option value="course-wordpress">Курс по WordPress</option>
							</select>
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