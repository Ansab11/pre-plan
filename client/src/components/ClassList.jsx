import React from 'react';

const ClassList = ({ classes }) => {
  return (
    <ul>
      {classes.map((cls) => (
        <li key={cls._id}>
          {cls.title} - {cls.date}
        </li>
      ))}
    </ul>
  );
};

export default ClassList;
