const express = require('express');
const classHandler =require('../controller/Dataconroller')
const router = express.Router();
const Class = require('../models/Class');


// Create class
router.post('/classes',classHandler.createClass);

// Read classes
router.get('/classes', classHandler.getClass);

// Update class
router.put('/classes/:id', classHandler.updateClass);

// Delete class
router.delete('/classes/:id', classHandler.deleteClass);

module.exports = router;
