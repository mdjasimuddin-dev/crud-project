import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink className='text-lg' to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className='text-lg' to="/create">Create</NavLink>
      </li>
      <li>
        <NavLink className='text-lg' to="/update">Update</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-green-900 shadow-sm text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="flex justify-center items-center">
            <img
              src="./../../../logo.png"
              alt=""
              className="w-[50px] h-[50px]"
            />
            <h1 to="/" className="text-xl font-bold text-white">
              CRUD
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/' className="btn bg-transparent text-white">Bye Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
