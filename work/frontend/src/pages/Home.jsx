import React from 'react';
import reactLogo from '../assets/react.svg';
import officeWork from '../assets/man-working-on-laptop-computer.jpg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      <div className="flex justify-center items-center gap-20">
        <div className="ls">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          <img src={officeWork} className="office-logo" alt="Office logo" />
        </div>
        <br />
        <div className="rs text-right">
          <h4 className="text-5xl p-2">Download Now</h4>
          <p className="text-3xl p-3">Lorem, ipsum.</p>
          <button className="text-white bg-red-500 px-8">Download Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
