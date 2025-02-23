import { useEffect, useState } from "react";
import products from "../../params/products";

const FormProducts = (selected) => {
       
    // state
    const[product, setProduct] = useState(Object.values(selected)[0]);
    //const product = Object.values(selected)[0];

    // useEffect
    useEffect(() => {        
        console.log('Select product:', product);
        setProduct(product);
    })

	return (
        <select id="product" name="product" className="form-control" 
        value={product} 
        onChange={(e) => setProduct(e.target.value)}>
            {products.map((product) => (                  
                <option key={product.id} value={product.id}>{product.name}</option>                
            ))}
        </select>
    )
};

export default FormProducts;
