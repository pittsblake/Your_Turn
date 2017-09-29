const express = require('express')
const router = express.Router({mergeParams: true})

const Schema = require("../db/schema.js");
const CityModel = Schema.CityModel;


router.get('/:meetUpId', (req, res) => {
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
    })

module.exports = router