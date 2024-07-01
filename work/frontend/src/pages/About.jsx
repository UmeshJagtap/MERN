import React from 'react';
import officeWork from '../assets/man-working-on-laptop-computer.jpg';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      {/* <div>About</div> */}
      <div className="flex justify-center items-center gap-10">
        <div className="work-image w-1/2">
          <img
            src={officeWork}
            className="office-logo w-full h-full pl-9"
            alt="Office logo"
          />
        </div>
        <div className="about-react text-left w-1/2">
          <h5 className="text-2xl font-black mb-1">About React</h5>
          <p className="text-lg font-lg">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on components. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Obcaecati, ut ipsam? Repellat
            impedit, perspiciatis magnam omnis deleniti, deserunt minima
            adipisci blanditiis neque harum officiis error quasi. Et alias sunt
            iure? Quia, aut? Sapiente omnis mollitia totam amet rem, ad porro
            aliquid et labore saepe iure temporibus rerum.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
