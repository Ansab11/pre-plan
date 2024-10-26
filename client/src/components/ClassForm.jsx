import React, { useState } from 'react';

const ClassForm = ({ addClass }) => {
  const [formData, setFormData] = useState({
    title: '', description: '', date: '', startTime: '', endTime: '', instructor: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClass(formData);  // Trigger the add class action
    setFormData({ title: '', description: '', date: '', startTime: '', endTime: '', instructor: '' });  // Clear the form
  };

  return (
    <div className="bg-green-300 p-6 w-full shadow-lg mt-16">
    <form onSubmit={handleSubmit} className="space-y-4 w-3/4 md:w-1/2 mx-auto">
      <input 
        type="text" 
        name="title" 
        placeholder="Title" 
        value={formData.title} 
        onChange={handleInputChange} 
        className="w-full p-2 border border-gray-800 rounded-md"
      />
      <input 
        type="text" 
        name="description" 
        placeholder="Description" 
        value={formData.description} 
        onChange={handleInputChange} 
        className="w-full p-2 border  border-gray-800  rounded-md"
      />
      <input 
        type="date" 
        name="date" 
        value={formData.date} 
        onChange={handleInputChange} 
        className="w-full p-2 border border-gray-800 rounded-md"
      />
      <input 
        type="text" 
        name="startTime" 
        placeholder="Start Time" 
        value={formData.startTime} 
        onChange={handleInputChange} 
        className="w-full p-2 border border-gray-800 rounded-md"
      />
      <input 
        type="text" 
        name="endTime" 
        placeholder="End Time" 
        value={formData.endTime} 
        onChange={handleInputChange} 
        className="w-full p-2 border border-gray-800 rounded-md"
      />
      <input 
        type="text" 
        name="instructor" 
        placeholder="Instructor" 
        value={formData.instructor} 
        onChange={handleInputChange} 
        className="w-full p-2 border border-gray-800 rounded-md"
      />
      <button type="submit" className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 mx-auto block">
        Add Class
      </button>
    </form>
  </div>
  


  );
};

export default ClassForm;
