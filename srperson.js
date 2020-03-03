const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get('/', (req, res)=> {
    res.send("Hello there")
});

router.post('/', (req, res)=> {
    res.send("What is your name?")
})

module.exports = router 

