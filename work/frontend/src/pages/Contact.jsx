import React from 'react';
import officeWork from '../assets/man-working-on-laptop-computer.jpg';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <div>Contact</div>
      <div className="flex justify-center items-center gap-20">
        <div className="ls">
          <img src={officeWork} className="office-logo" alt="Office logo" />
        </div>
        <br />
        <div className="rs">
          <h4 className="text-5xl p-2">Contact Us</h4>
          {/* <p className="text-3xl p-3">Lorem, ipsum.</p> */}
          <form className="flex border-2 border-black p-10 bg-gray-00 gap-4">
            <div className="l-form flex flex-col gap-4">
              <input
                placeholder="Full Name"
                type="text"
                className="border-b border-black"
              />
              <input
                placeholder="Email"
                type="email"
                className="border-b border-black"
              />
              <input
                placeholder="Message"
                type="text"
                className="border-b border-black"
              />
              <button className="text-white bg-red-500 px-8 my-2">
                Contact Us
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-left">
                <h4 className="font-bold">Contact</h4>
                <p>abc@hotmail.com</p>
              </div>
              <div className="text-left">
                <h4 className="font-bold">Based In</h4>
                <p>Pune MagarpattaCity</p>
              </div>
              <div className="flex gap-2 my-3 p-1">
                {/* <li className="border-2 border-gray-400 rounded-full p-2 list-disc"></li> */}
                <svg
                  class="h-6 w-6 flex-none fill-white stroke-gray-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                </svg>
                <svg
                  class="h-6 w-6 flex-none fill-white stroke-gray-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                </svg>
                <svg
                  class="h-6 w-6 flex-none fill-white stroke-gray-500 stroke-2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="11" />
                </svg>
              </div>
            </div>
          </form>

          <div className=""></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
