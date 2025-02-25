import { useEffect } from "react";
import User from "../User";
import Logo from "../Logo";
import LeftNavigation from "../LeftNavigation";

const LeftPanel = (props) => {

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
				<LeftNavigation setStatus={props.setStatus} students={props.students} />
			</div>
			{/* <!-- // Navigation 1 --> */}

		</div>
     );
}

export default LeftPanel;