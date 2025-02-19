import { useEffect } from "react";
import products from "../../data/products";

const FormProducts = (selected) => {
    
    useEffect(() => {        
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
