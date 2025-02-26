import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';

import jsonServer from "../../params/jsonServer";
import FormProducts from '../FormProducts';
import navLinks from '../../params/navLinks';
//import useFetch from '../useFetch';

import formatDate from '../../utils/formatDate';

// V.1
//import FormStatuses from '../FormStatuses';
// V.2
import statuses from "../../params/statuses";

const Edit = () => {

	// id
	const {id} = useParams()

	// target jsonServer
	const targetJsonServer = jsonServer + '/' + id;
	
	// form state
	const [name, setName] = useState(null);
	const [phone, setPhone] = useState(null);
	const [email, setEmail] = useState(null);
	const [product, setProduct] = useState(null);
	const [status, setStatus] = useState(null);
	
	// при редактировании дату заявки не меняем (!)
	const [date, setDate] = useState(null);

	//const {student, isLoading, error} = useFetch(targetJsonServer);
	// Student state
	const [student, setStudent] = useState(null);
	// loading state
	const [isLoading, setLoading] = useState(true);
	// Error state
	const [error, setError]= useState(null);
	
	const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

	// useEffect
    useEffect(() => {        
		
        console.log('Current id:', id);

	    fetch(targetJsonServer).then( (res) => {
			console.log('Status: ', res.status);
			if (res.ok !== true){
                throw Error('Не могу получить данные с jsonServer!');
            }
			return res.json();

		}).then( (student) => {
			console.log('student:', student);
			setStudent(student);
			setLoading(false);

			setName(student.name);
			setPhone(student.phone);
			setEmail(student.email);
			setProduct(student.product);
			setStatus(student.status);
			setDate(student.date);

		}).catch((err) => {			
				setError('Внимание! Ошибка:', err.message);                
                setLoading(false);
		})		
    
	}, []);		// useEffect сработает один раз


	// submit (!)
    const handleSubmit = (e) => {
      e.preventDefault();
		
	  // при редактировании дату заявки не меняем (!)
	  //const date = new Date().toISOString();      
      
	  const student = {id, date, product, name, email, phone, status}
      console.log('Submit form:', student);

	  // Edit student (!)
      fetch(targetJsonServer, 
		{
        method: "PUT",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(student)
      	}).then((res) => {

				console.log('Status: ', res.status);
				if (res.ok !== true){
					throw Error('Не могу получить данные с jsonServer!');
				}
				return res.json();
			
		}).then((student) => {
			console.log('Record student was changed:', student);
			setIsPending(false);
			navigate(navLinks[1]['link']);     // to result table
		});    
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
						<a href="#"
						onClick={() => navigate(navLinks[1]['link'])} 
						className="btn btn-link">Вернуться назад</a>
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
										<div className="col" id="date">{formatDate(student.date)}</div>
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
											<input
												type="text"
												className="form-control"
												value={name} onChange={(e) => {setName(e.target.value)}}												
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
												value={email} onChange={(e) => {setEmail(e.target.value)}}
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
												value={phone} onChange={(e) => {setPhone(e.target.value)}}
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
											{/* V.1 */}
											{/* <FormStatuses select={student.status} /> */}

											{/* V.2 */}
											<select className="custom-select" id="status" name="status" 
												defaultValue={student.status} 
												onChange={(e) => {setStatus(e.target.value)}}
												>
													{statuses.map((status) => (                  
														<option key={status.id} value={status.id}>{status.name}</option>                
													))}
											</select>      
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