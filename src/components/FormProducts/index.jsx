import { useEffect } from "react";
import products from "../../params/products";

const FormProducts = (selected) => {
    
    // Как Преобразовать Объект в Массив (JS)
    // https://only-to-top.ru/blog/coding/2019-11-23-object-to-array.html    
    
    useEffect(() => {        
        console.dir(products);
        console.log('Select product:', Object.values(selected)[0]);
    })
    
	return (
        <select id="product" name="product" className="form-control" defaultValue={Object.values(selected)[0]}>
            {products.map((product) => (                  
                <option key={product.id} value={product.id}>{product.name}</option>                
            ))}
        </select>
    )
};

export default FormProducts;
