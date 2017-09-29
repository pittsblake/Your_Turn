const express = require('express')
const router = express.Router({mergeParams: true})

const Schema = require("../db/schema.js");
const CityModel = Schema.CityModel;

// Edit Route
router.get('/:boardGameId/edit', (req, res) => {
    console.log("BoardGame Controller")
     // Get the city and MeetUp ID from params
     const cityId = req.params.cityId
     const meetUpId = req.params.meetUpId
     const boardGameId = req.params.boardGameId
 
     // Find the City from the DB using the ID
     CityModel.findById(cityId)
         .then((city) => {
             const meetUp = city.meetUp.id(meetUpId)
             const boardGame = meetUp.boardGame.id(boardGameId)
             res.render('boardGame/edit', {
                 meetUp: meetUp,
                 cityId: cityId,
                 boardGame: boardGame
             })
         })
 })

 //Update Route
 router.put('/:boardGameId', (req, res) => {
    const cityId = req.params.cityId
    const meetUpId = req.params.meetUpId
    const boardGameId = req.params.boardGameId
    const updatedBoardGame = req.body

    CityModel.findById(cityId)
        .then((city) => {
            const meetUp = city.meetUp.id(meetUpId)
            const boardGame = meetUp.boardGame.id(boardGameId)
            boardGame.name = updatedBoardGame.name
            boardGame.date = updatedBoardGame.date
            return city.save();
        })
        .then (() => {
            res.redirect(`/city/${cityId}/meetUp/${meetUpId}`)
        })
        .catch((error) => {
            console.log(error)
        })
 })

 module.exports = router