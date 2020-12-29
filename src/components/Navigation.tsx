import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-white h-full py-5 flex flex-col items-center justify-center">
      <div className="text-4xl"> Alex Cerda</div>
      <div className="flex pt-5">
        <NavLink to="/" className="px-5 uppercase">
          Web Development
        </NavLink>
        <NavLink to="/contact" className="px-5 uppercase">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
