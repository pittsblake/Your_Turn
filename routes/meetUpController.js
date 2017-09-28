const express = require('express')
const router = express.Router()

const Schema = require("../db/schema.js");
const CityModel = Schema.CityModel;




//Show route
router.get('/:id', (req, res) => {
    console.log('Meetup Controller');
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
});

module.exports = router;