import getTestData from './../../utils/TestItem';
import FormProducts from '../FormProducts';
import { useEffect } from 'react';

function Form() {

    // TestItems
    const data = getTestData();
    
    useEffect(() => {
      console.log('We get TestItems: ', data);
    });

    return ( 
            <form id="form" method="POST" action="">
              <label>Ваши данные:</label>
              <div className="form-group">
                <input id="name" type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required 
                defaultValue={data.name}
                />
              </div>
              <div className="form-group">
                <input id="phone" type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон" 
                defaultValue={data.phone}
                />
              </div>
              <div className="form-group">
                <input id="email" type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required 
                defaultValue={data.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                {<FormProducts selected={data.product}/>}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
              </div>
            </form>
     );
}

export default Form;