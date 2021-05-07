const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');

router.get('/', async (req, res) => {
    try {
        const userData = await UserData.find();
        res.json(userData);    
    }
    catch(err){
        console.log(err)
    }
});

router.post('/', async (req, res) => {
    let user = new UserData({
        age: req.body.age,
        country: req.body.country
    });
    try {
        await UserData.insertMany(user)
        res.json('Saved')
    }
    catch(err){
        res.status(400).send({
            status: 400,
            error: 'Bad request'
        })
    }
});

module.exports = router;