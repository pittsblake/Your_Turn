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






//Show Route (make sure close to bottom)
router.get('/:cityId', (req, res) => {
    const cityId = req.params.cityId

    CityModel.findById(cityId)
        .then((city) => {
            res.render('city/show', {
                city: city
            })
        })
})

/*router.get('/:cityId/meetUp/:meetUpId', (req, res) => {
    console.log('City Controller');
    const cityId = req.params.cityId
    const meetUpId = req.params.meetUpId

    CityModel.findById(cityId)
        .then((city) => {
            const meetUp = city.meetUp.id(meetUpId)

            res.render('meetUp/show', {
                meetUp: meetUp,
                cityId: cityId
            })
          
        })
    
    
        .catch((error) => {
            console.log(error)
        })
});*/

module.exports = router