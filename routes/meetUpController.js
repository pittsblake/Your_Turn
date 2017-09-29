const express = require('express')
const router = express.Router({mergeParams: true})

const Schema = require("../db/schema.js");
const CityModel = Schema.CityModel;


// New Route
router.get('/new', (req, res) => {
    
})


// Create Route



// Show Route
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

// Delete Route
router.get('/:meetUpId/delete', (req, res) => {
    const cityId = req.params.cityId
    const meetUpId = req.params.meetUpId

    CityModel.findById(cityId)
        .then((city) => {
            const meetUp = city.meetUp.id(meetUpId).remove()

            return city.save()
        })
        .then(() => {
            res.redirect(`/city/${cityId}`)
        })
})


module.exports = router