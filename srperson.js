const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema();
const router = express.Router();

router.get('/', (req, res)=> {
    res.send("Hello there")
});

module.exports = router 

