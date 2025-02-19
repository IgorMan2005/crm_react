import Header from "../Header";
import Form from "../Form";

function Home() {
    return ( 
        <div className="with-nav radial-bg flex-center">
            {/* white-plate  */}
            <div className="white-plate white-plate--payment">
            <div className="container-fluid">

                {/* header */}
                <Header />

                <div className="white-plate__line-between white-plate__line-between--main"></div>

                <Form />

            </div>
            </div>
            {/* // white-plate */}
        </div>
     );
}

export default Home;