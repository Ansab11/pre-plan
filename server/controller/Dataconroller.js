const express = require('express');
const Class = require('../models/Class');


module.exports = classHandler = {
    createClass: async (req, res) => {
        try {
            // Destructure date and other properties from the request body
            const { date, ...rest } = req.body; // Get date and the rest of the properties
    
            // Ensure date is in a valid format
            const dateObject = new Date(date); // Create a date object from the input string
    
            // Check if the date is valid
            if (isNaN(dateObject.getTime())) {
                return res.status(400).json({ message: "Invalid date format" });
            }
    
            // Format the date to YYYY-MM-DD
            const formattedDate = dateObject.toISOString().split('T')[0];
            console.log(formattedDate) // Extract just the date part
          req.body.date=formattedDate;
          console.log(req.body)
          const newClass = new Class(req.body);
           
            await newClass.save();  // Save the new class instance to the database
            // res.status(201).json(newClass);  // Respond to the client with the created class data
        } catch (error) {
            res.status(500).json({ message: "Error creating class", error });
        }
    }
    
    ,
    getClass: async (req, res) => {
        try {
            const classes = await Class.find();
            console.log(classes)
            res.json(classes);
        } catch (error) {
            res.status(500).json({ message: "Error finding class", error });
        }
    },
    updateClass: async (req, res) => {
        try {
            const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedClass);
        } catch (error) {
            res.status(500).json({ message: "Error updating class", error });
        }
    },
    deleteClass: async (req, res) => {
        try {
            await Class.findByIdAndDelete(req.params.id);
            res.json({ message: 'Class deleted' });
        } catch (error) {
            res.status(500).json({ message: "Error updating class", error });
        }

    }

}

