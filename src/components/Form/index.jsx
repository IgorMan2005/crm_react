import getTestData from './../../utils/TestItem';
import FormProducts from '../FormProducts';
import { useEffect, useState } from 'react';
import jsonServer from '../../params/jsonServer';
import getLastID from '../../utils/getLastID';
import useFetch from '../useFetch';

function Form() {

    // TestItems
    const data = getTestData();
    // DB from jsonServer
    const {students, isLoading, error} = useFetch(jsonServer);
    
    useEffect(() => {
      console.log('We get TestItems: ', data);
    });

    // state
    const [name, setName] = useState(data.name);
    const [phone, setPhone] = useState(data.phone);
    const [email, setEmail] = useState(data.email);
    const [product, setProduct] = useState(data.product);

    // submit (!)
    const handleSubmit = (e) => {
      e.preventDefault();
      const date = new Date().toISOString();
      const status = 'new';
  
      const id = getLastID(students);
      const student = {id, date, product, name, email, phone, status}
      console.log('Submit form:', student);

      // fetch(jsonServer, {
      //   method: "POST",
      //   headers: {"Content-type":"application/json"},
      //   body: JSON.stringify(student)
      // })

    }

    return ( 
            <form id="form" onSubmit={handleSubmit}>
              <label>Ваши данные:</label>
              <div className="form-group">
                <input id="name" type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required 
                value={name} onChange={(e) => {setName(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <input id="phone" type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон" 
                value={phone} onChange={(e) => {setPhone(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <input id="email" type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required 
                value={email} onChange={(e) => {setEmail(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                {<FormProducts selected={product} />}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
              </div>
            </form>
     );
}

export default Form;