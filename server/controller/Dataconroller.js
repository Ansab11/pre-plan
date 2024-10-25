const express = require('express');
const Class = require('../models/Class');


module.exports = classHandler = {
    createClass: async (req, res) => {
        try {
            const newClass = new Class(req.body);  // Initialize new class with req.body data
            await newClass.save();  // Save the new class instance to the database
            console.log(newClass);  // Log the created class to the console
            res.status(201).json(newClass);  // Respond to the client with the created class data
        } catch (error) {
            res.status(500).json({ message: "Error creating class", error });
        }
    },
    getClass: async (req, res) => {
        try {
            const classes = await Class.find();
            console.log(classes)
            res.json(classes);
        } catch (error) {
            res.status(500).json({ message: "Error finding class", error });
        }
    },
    updateClass:async (req, res) => {
       try{const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedClass);
    }catch (error) {
        res.status(500).json({ message: "Error updating class", error });
    }
    },
    deleteClass: async (req, res) => {
       try{
        await Class.findByIdAndDelete(req.params.id);
        res.json({ message: 'Class deleted' });
       }catch (error) {
        res.status(500).json({ message: "Error updating class", error });
    }

    }

}

