import React from 'react';
import { Link } from 'react-router-dom';
//import './AboutUs.css'; // Keep the CSS for any custom styles

const AboutUs = () => {
  return (
    <div className="flex items-center mt-10 bg-black text-white p-10">
      <div className="flex-1 p-5">
        <h3 className="text-green-400">About Us</h3>
        <h1 className="text-4xl mt-0">Every Day Is A Chance To Become Better</h1>
        <p className="text-gray-300">
          Give Your Workout More Variety Than Ever With Our Accessories, From Warmup To Cooldown. 
          Increase Your Body's Capacities Every Day, From Stability To Mobility, From Power To Speed.
        </p>
        <ul className="list-none p-0">
          <li className="my-2">✔ Body And Mind <span className="text-gray-300">Commercial Treadmill Series.</span></li>
          <li className="my-2">✔ Healthy Life <span className="text-gray-300">Commercial Elliptical Series.</span></li>
          <li className="my-2">✔ Strategies <span className="text-gray-300">Commercial Cyclic Series.</span></li>
          <li className="my-2">✔ Workout <span className="text-gray-300">Special Performance.</span></li>
        </ul>
        <Link to="/about" className="inline-block mt-5 px-5 py-2 bg-green-400 text-black rounded hover:bg-green-600">Read More</Link>
      </div>
      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <img src={'https://static.vecteezy.com/system/resources/thumbnails/022/995/026/small_2x/interior-of-a-modern-gym-with-fitness-equipment-generative-ai-photo.jpg'} alt="About Us" className="max-w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default AboutUs;
