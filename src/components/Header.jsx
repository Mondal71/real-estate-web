import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-500">My</span>
            <span className="text-blue-700">Estate</span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-blue-800 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-blue-800 hover:underline">
              About
            </li>
          </Link>
          <Link to="sign-in">
            <li className="text-blue-800 hover:underline">SignIn</li>
          </Link>
        </ul>
        <form className="flex items-center bg-blue-100 p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-blue-800" />
        </form>
      </div>
    </header>
  );
}
