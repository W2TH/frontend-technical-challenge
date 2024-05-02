import { NavLink } from "react-router-dom"
import { PAGES } from "../assets/databases/pages"

function Sidebar() {

  return (
    <div className="bg-[#808080] p-6 text-2xl font-bold">
      <figure className="bg-[#D3D3D3] rounded-md p-6 text-center text-[#808080]">
        <h1>Logo</h1>
      </figure>
      <nav className="mt-5">
        {Object.values(PAGES).map((page, index)=>(
          <NavLink
          key={index}
          to={page.link}
          className={
            ({isActive}) => `block px-9 py-2 rounded-md ${
              isActive? 'bg-white text-[#808080]':'text-white hover:bg-[#D3D3D3] hover:text-[#808080]'
            }`}>
            {page.name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
  
  export default Sidebar