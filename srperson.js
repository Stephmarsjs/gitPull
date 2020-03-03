const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get('/', (req, res)=> {
    res.send("Hello there")
});

router.post('/', async (req, res)=> {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

})

module.exports = router 

