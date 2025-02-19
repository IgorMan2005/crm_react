import filterProductData from "../../data/filterProductData";

function FilterProducts() {
    return ( 
        <div id="topStatusBar" className="btn-group" role="group">
                filterProductData.map((filterData) => {
                    <a href="#" className="btn btn-light" data-value={`badge badge-pill ${filterData.key}`}>{filterData}</a>
                });
        </div>
     );
}

export default FilterProducts;