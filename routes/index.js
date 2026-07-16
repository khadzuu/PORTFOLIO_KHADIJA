const express = require("express");

const router = express.Router();

const projects = require("../data/project");

router.get("/", (req, res) => {

    res.render("index", {

        projects

    });

});

router.get("/coming-soon", (req,res) =>{
    res.render("coming-soon");
});

module.exports = router;