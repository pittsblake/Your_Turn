const express = require('express')
const router = express.Router()

const Schema = require("../db/schema.js");
const CityModel = Schema.CityModel;

// INDEX Route
router.get('/', (req, res) => {

    // Find all of the cities in the database
    CityModel.find({})
        .then((cities) => {
            //THEN once they come back from the database
            //Render them in Handlebars
            res.render('city/index', {
                cities: cities
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router