import React from 'react';
import { useNavigate } from 'react-router-dom';
// Removed CSS import since we are using Tailwind CSS

const GymFeatures = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle Read More button click
  const handleReadMore = () => {
    navigate('/features'); // Navigate to Features page
  };
  
  return (
    <div className="py-5 text-center">
      <h2 className="text-2xl font-bold mb-5">Fitness Features</h2>
      <div className="flex justify-around">
        <div className="bg-gray-800 text-black p-5 m-2 rounded-lg w-1/3 text-center">
          <img 
            className="w-full h-auto max-h-52 object-contain rounded-lg" 
            src="https://img.freepik.com/fotos-gratis/homem-jovem-fitness-em-estudio_7502-5008.jpg" 
            alt="Gym for Men" 
          />
          <h3 className="text-lg font-semibold mt-2">Gym For Men</h3>
          <p className="mt-2">Transform Your Body With Fit Palace Gym's Personalized Diet</p>
          <button 
            className="mt-3 px-5 py-2 bg-lime-400 text-white rounded-md cursor-pointer" 
            onClick={handleReadMore}
          >
            Read More
          </button>
        </div>

        <div className="bg-gray-800 text-black p-5 m-2 rounded-lg w-1/3 text-center">
          <img 
            className="w-full h-auto max-h-52 object-contain rounded-lg" 
            src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg" 
            alt="Body Building" 
          />
          <h3 className="text-lg font-semibold mt-2">Body Building</h3>
          <p className="mt-2">Experience A The Workout With Our Modern Equipment</p>
          <button 
            className="mt-3 px-5 py-2 bg-lime-400 text-white rounded-md cursor-pointer" 
            onClick={handleReadMore}
          >
            Read More
          </button>
        </div>

        <div className="bg-gray-800 text-black p-5 m-2 rounded-lg w-1/3 text-center">
          <img 
            className="w-full h-auto max-h-52 object-contain rounded-lg" 
            src="https://img.freepik.com/premium-photo/fitness-girl-training-with-dumbbells-gym_1212634-13489.jpg" 
            alt="Gym for Women" 
          />
          <h3 className="text-lg font-semibold mt-2">Gym For Women</h3>
          <p className="mt-2">Get Expert Guidance And Achieve Your Goals With Fit Palace Gym's</p>
          <button 
            className="mt-3 px-5 py-2 bg-lime-400 text-white rounded-md cursor-pointer" 
            onClick={handleReadMore}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GymFeatures;
