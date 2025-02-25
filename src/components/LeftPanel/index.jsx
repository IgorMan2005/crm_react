import { useEffect } from "react";
import User from "../User";
import Logo from "../Logo";

const LeftPanel = (props) => {

	useEffect(() => {        
			console.log('LeftPanel status:' , props.status);           
			console.log('LeftPanel type:', typeof(props.setStatus));       
		}, []);

    return ( 
        <div className="left-panel blue-skin">
			{/* <!-- Logo --> */}
				<Logo />
			{/* <!-- // Logo --> */}
			
			{/* <!-- User --> */}
				<User />
			{/* <!-- // User --> */}
			{/* <!-- Navigation 1 --> */}
			<div className="left-panel__navigation">
				<div className="left-panel__navigation-title">Заявки</div>
				<ul>
					<li><a data-value="all" data-role="left-status" href="#" className="active">Все вместе</a></li>
					<li><a data-value="new" data-role="left-status" href="#" >
						Новые
						<div className="badge" id="badge-new">12</div></a>
					</li>
					<li><a data-value="inwork" data-role="left-status" href="#">В работе</a></li>
					<li><a data-value="complete" data-role="left-status" href="#">Завершенные</a></li>
				</ul>
			</div>
			{/* <!-- // Navigation 1 --> */}

		</div>
     );
}

export default LeftPanel;