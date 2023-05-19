import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full py-2">
      <div className="w-full  max-w-screen-lg mx-auto flex">
        <ul className="flex gap-2 justify-center ">
          <li className="text-black font-bold hover:text-blue-400 cursor-pointer">
            <Link to="/about">
              about
            </Link>
          </li>
          <li className="text-black font-bold hover:text-blue-400 cursor-pointer">
            <Link to="/">
              home
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
