import Sidebar from "../../components/Sidebar"
import { Outlet } from "react-router-dom";

function MainLayout() {

	return (
		<div className="grid grid-cols-[23%,1fr] h-dvh">
		<Sidebar/>
		<main className=" bg-blue-100 p-12">
			<Outlet />
		</main>
		</div>
	)
}
  
  export default MainLayout