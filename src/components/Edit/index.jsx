import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';

import useFetch from '../useFetch';
import jsonServer from "../../params/jsonServer";
import FormProducts from '../FormProducts';
import FormStatuses from '../FormStatuses';



const Edit = () => {

	const {id} = useParams()
    const {students:student, isLoading, error} = useFetch(jsonServer + '/' + id);
	
    const navigate = useNavigate();

	// form state
	const [name, setName] = useState();
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();
	const [product, setProduct] = useState();
	const [status, setStatus] = useState();

	// useEffect
    useEffect(() => {        
		if(student !== null) {
        console.log('Current id:', id);
		console.log('student:', student);

		// 	// form data:
		setName(student.name);
		
		}
    }, [name]);

   
	// if(student !== null) {
	// 	// form data:
	// 	setName(student.name);
	// 	setPhone(student.phone);
	// 	setEmail(student.email);
	// 	setProduct(student.product);
	// 	setStatus(student.status);
	// }


	// submit (!)
    const handleSubmit = (e) => {
      e.preventDefault();
      const date = new Date().toISOString();      
      const student = {id, date, product, name, email, phone, status}
      console.log('Submit form:', student);
	}


	
	
    return ( 
		<>

		{isLoading && <div>Loading...</div>}
		{error && <div>{error}</div>}

		{student && (

        <div className="with-nav">
        {/* <!-- main-wrapper --> */}
		<div className="form-wrapper">
			<div className="container-fluid">
				{/* <!-- row --> */}
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="admin-heading-1">Работа с заявкой N: {id}</div>
					</div>
					<div className="col text-right">
						<a href="index.html" className="btn btn-link">Вернуться назад</a>
					</div>
				</div>
				{/* <!-- // row --> */}
				{/* <!-- row --> */}
				<div className="row">
					{/* <!-- col --> */}
					<div className="col">
						<form id="form" onSubmit={handleSubmit}>
							{/* <!-- card --> */}
							<div className="card mb-4">
								<div className="card-header">Данные о заявке</div>
								<div className="card-body">
									<div className="row mb-3">
										<div className="col-md-2">
											<strong>ID:</strong>
										</div>
										<div className="col">Заявка №<span id="number">{id}</span></div>
										<input name="id" type="hidden" id="id" />
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Дата создания:</strong>
										</div>
										<div className="col" id="date">{student.date}</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Продукт:</strong>
										</div>
										<div className="col">
											<FormProducts select={student.product}	/>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Имя:</strong>
										</div>
										<div className="col">
											{student.name}
											<input
												type="text"
												className="form-control"
												value={student.name} onChange={(e) => {setName(e.target.value)}}
												
												id="name"
												name="name"
											/>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Email:</strong>
										</div>
										<div className="col">
											<input
												type="text"
												className="form-control"
												value={student.email}
												id="email"
												name="email"
												/>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Телефон:</strong>
										</div>
										<div className="col">
											<input
												type="text"
												className="form-control"
												value={student.phone}
												id="phone"
												name="phone"
												/>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Статус заявки:</strong>
										</div>
										<div className="col">
											<FormStatuses select={student.status}	/>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- //card --> */}
							<div className="row justify-content-between">
								<div className="col text-right">
									<button type="submit" className="btn btn-primary">Сохранить изменения</button>
								</div>
							</div>
						</form>
					</div>
					{/* <!-- //col --> */}
				</div>
				{/* <!-- //row --> */}
			</div>
		</div>
		{/* <!-- // main-wrapper --> */}
        </div>


		 )}


		</>
     );
}

export default Edit;