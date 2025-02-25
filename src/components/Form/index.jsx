import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

import getTestData from './../../utils/TestItem';

import jsonServer from '../../params/jsonServer';
import getLastID from '../../utils/getLastID';
import useFetch from '../useFetch';
import navLinks from '../../params/navLinks';

// V.1
//import FormProducts from '../FormProducts';
// V.2
import products from "../../params/products";


function Form() {

    // TestItems
    const data = getTestData();
    // DB from jsonServer
    const {students, isLoading, error} = useFetch(jsonServer);
    
    // useEffect(() => {
    //   console.log('We get TestItems: ', data);
    //   console.log('Students from jsonServer: ', students);
    // });

    // form state
    const [name, setName] = useState(data.name);
    const [phone, setPhone] = useState(data.phone);
    const [email, setEmail] = useState(data.email);
    const [product, setProduct] = useState(data.product);

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    console.log('navLinks:', navLinks);
  

    // submit (!)
    const handleSubmit = (e) => {
      e.preventDefault();
      const date = new Date().toISOString();
      const status = 'new';
  
      // Get Last ID + 1
      const id = getLastID(students);
      const student = {id, date, product, name, email, phone, status}
      console.log('Submit form:', student);

      // Add student (!)
      fetch(jsonServer, {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(student)
      }).then(() => {
              console.log('New student was added!');
              setIsPending(false);
              navigate(navLinks[1]['link']);     // to result table
          })
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
                {/* V.1 */}
                {/* {<FormProducts selected={product} />} */}

                {/* V.2 */}
                <select id="product" name="product" className="form-control" 
                value={product} 
                onChange={(e) => setProduct(e.target.value)}>
                    {products.map((product) => (                  
                        <option key={product.id} value={product.id}>{product.name}</option>                
                    ))}
                </select>
    
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
              </div>
            </form>
     );
}

export default Form;