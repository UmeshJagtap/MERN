import React from 'react';
import bird from '../assets/colorfulBirdSnip.jpg';
import githubUmesh from '../assets/github-umesh.jpg';
import Footer from '../components/Footer';

const GitHub = () => {
  return (
    <>
      {/* <div>GitHub</div> */}
      <div className="flex gap-10 p-4 py-20">
        <div className="ls w-1/2">
          <img
            src={bird}
            alt="bird-logo"
            className="#020322 border-4 border-black rounded-full"
          />
        </div>
        <div className="rs w-1/2">
          <div className="text-left px-20 py-8 leading-7">
            <h2 className="font-bold">Umesh Jagtap</h2>
            <h4 className="font-semibold">#umesh.aj</h4>
            <p className="font-semibold">Pune, MH</p>
          </div>
          <div className="flex justify-center align-center p-2 gap-4 font-semibold">
            <p>Following : 1</p>
            <p>Repository : 9</p>
          </div>
          <button className="bg-red-600 text-white px-20 py-1">
            Followers : 3
          </button>
          <a href="https://github.com/UmeshJagtap" target="_blank">
            <img
              src={githubUmesh}
              alt="https://github.com/UmeshJagtap"
              className="mx-20 my-4 hover:shadow"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GitHub;

// width: 200px;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 50%;
