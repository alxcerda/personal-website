import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

function Navigation() {
  return (
    <nav>
      <div className="desktop-nav">
        <NavigationDesktop />
      </div>
      <div className="mobile-nav">
        <NavigationMobile />
      </div>
    </nav>
  );
}

export default Navigation;
