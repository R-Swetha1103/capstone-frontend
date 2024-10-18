import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <section className="flex max-w-screen-xl w-full flex-row">
        <div className="flex-1 relative">
          <img 
            src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg" 
            alt="Fitness Models" 
            className="w-full h-auto block"
          />
          <img 
            src="https://img.freepik.com/premium-photo/body-shaping-concept-smiling-sporty-woman-doing-leg-raise-exercise_116547-49372.jpg" 
            alt="Fitness Models 2" 
            className="w-full h-auto block"
          />
        </div>
        <div className="flex-1 p-10">
          <h1 className="text-[#b5ff00]">Get Your Fitness Face On.</h1>
          <p className="mb-4">
          Regular exercise can increase brain cell activity, which can improve memory, focus, 
          and concentration. It can also strengthen the hippocampus, which helps prevent memory loss 
          and cognitive decline.
          </p>
          <p>
          Flexibility is important for overall fitness
          Flexibility refers to the range of motion of your joints and the ability of your
          muscles to stretch.It's important for maintaining posture, preventing injury, and 
          improving athletic performance
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
