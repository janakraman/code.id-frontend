import { Link } from "react-router-dom";
import logo from "../assets/code-colored.webp";

const Navbar = () => {
  return (
    <header className="lg:px-16 px-6 flex flex-wrap items-center bg-white lg:py-2 py-4">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/">
          <img src={logo} className="w-1/2" alt="logo" data-testid="mainLogo" />
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <Link
                to="/add"
                className="lg:p-4 py-3 font-bold px-0 block border-b-2 border-transparent hover:border-gray-900"
              >
                <div className="flex flex-row">
                  <span>Add Contact</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
