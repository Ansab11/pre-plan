import React, { useState, useEffect } from 'react';

const ClassList = ({ classes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next class
  const nextClass = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % classes.length);
  };

  // Change class every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(nextClass, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [classes.length]);

  return (
    <div className="fixed bottom-0 w-full bg-green-500 flex flex-col items-center overflow-hidden h-40">
      <h1 className="text-2xl font-semibold text-white mt-2  underline">Upcoming Classes</h1>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
         {classes.length > 0 ? (
          classes.map((cls) => (
            <div key={cls._id} className="flex-shrink-0 w-full text-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">{cls.title}</h2>
              <p className="text-gray-800 font-bold">{cls.date}</p> 
              <p className="text-gray-800 font-bold">{cls.startTime}</p> 
              <h2 className="text-gray-900 font-bold"> By MR/MS: {cls.instructor}</h2> 
              
            </div>
          ))
        ) : (
          <p className="text-white">No classes scheduled</p>
        )}
      </div>
    </div>
  );
};

export default ClassList;
