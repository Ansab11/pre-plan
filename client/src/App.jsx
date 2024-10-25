
import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClassForm from './components/ClassForm';
import ClassList from './components/ClassList';

const App = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    const response = await axios.get('http://localhost:5000/api/classes');
    setClasses(response.data);
  };

  const addClass = async (formData) => {
    await axios.post('http://localhost:5000/api/classes', formData);
    fetchClasses(); // Refresh the list after adding a class
  };

  return (
    <div>
      <h1>Class Scheduler</h1>
      <ClassForm addClass={addClass} />
      <ClassList classes={classes} />
    </div>
  );
};

export default App;
