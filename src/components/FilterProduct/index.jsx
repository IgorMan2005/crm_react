import filterProductData from "../../params/filterProductData";

const FilterProducts = () => {

    return (         
        
        <select className="custom-select" id="productSelect" defaultValue={Object.values(filterProductData)[0]}>
            {filterProductData.map((product) => (                  
                <option key={product.id} value={product.id}>{product.name}</option>                
            ))}
        </select>
     );
}

export default FilterProducts;