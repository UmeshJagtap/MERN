import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="border-b-2"></div>
      {/* <div>Footer</div> */}
      <div className="flex justify-center items-center">
        <div className="logo text-5xl font-black px-20 w-1/2">
          <h5>LOGO</h5>
        </div>
        <div className="info flex gap-6 text-left px-20">
          <div className="resources flex flex-col">
            <h2 className="font-bold">Resources</h2>
            <a href="#">Home</a>
            <a href="#">About</a>
          </div>
          <div className="followUs flex flex-col">
            <h2 className="font-bold">Follow Us</h2>
            <a href="git">GitHub</a>
            <a href="discord">Discord</a>
          </div>
          <div className="legal flex flex-col">
            <h2 className="font-bold">Legal</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
