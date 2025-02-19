import { useEffect } from "react";

const FormProducts = (selected) => {
    
    // products
    const products = [
        {
            "id": "course-html",
            "name": "Курс по верстке",
        },
                {
            "id": "course-js",
            "name": "Курс по JavaScript",
        },
        {
            "id": "course-vue",
            "name": "Курс по VUE JS",
        },
        {
            "id": "course-php",
            "name": "Курс по PHP",
        },
        {
            "id": "course-wordpress",
            "name": "Курс по WordPress",
        },
        
    ]
        

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
