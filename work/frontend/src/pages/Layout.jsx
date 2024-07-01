import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// import officeWork from '../assets/man-working-on-laptop-computer.jpg';
import reactLogo from '../assets/react.svg';

const Layout = () => {
  return (
    <>
      {/* <p>Layout</p> */}
      <nav className="flex gap-8 justify-center items-center p-4 border-b-2">
        {/* <img src={officeWork} className="w-12" alt="Office logo" /> */}
        <div className="px-10">
          <img src={reactLogo} className="react" alt="React logo" />
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/github">Github</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="px-10">
          <a className="text-black p-4">Log In</a>
          <button className="bg-red-500 text-white p-2">Get Started</button>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
