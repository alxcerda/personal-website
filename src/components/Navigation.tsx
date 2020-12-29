import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-white h-full py-5 flex flex-col items-center justify-center">
      <NavLink to="/" className="text-4xl text-accent-dark">
        alex cerda
      </NavLink>
      <div className="flex pt-5">
        <NavLink
          to="/portfolio"
          className="px-5 uppercase"
          activeClassName="text-accent-light"
        >
          Web Development
        </NavLink>
        <NavLink
          to="/blog"
          className="px-5 uppercase"
          activeClassName="text-accent-light"
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className="px-5 uppercase"
          activeClassName="text-accent-light"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
