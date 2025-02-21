import products from "../../params/products";

const ProductSelect = (selected) => {
    return ( 

        <select id="product" name="product" className="custom-select" defaultValue={Object.values(selected)[0]}>
            {products.map((product) => (                  
                <option key={product.id} value={product.id}>{product.name}</option>                
            ))}
        </select>

     );
}

export default ProductSelect;