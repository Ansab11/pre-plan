import React, { useEffect, useState } from 'react';
import ClassForm from './ClassForm';
import ClassList from './ClassList';
import Header from './Header';
import axios from 'axios';

const AppLayout = () => {
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
    <div className='flex flex-col mi-h-screen'>
      <Header />
      <main className='flex-1'> 
      <ClassForm addClass={addClass} />
      </main>
      <ClassList classes={classes} />
    </div>
  )
}

export default AppLayout












































