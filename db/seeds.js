require('dotenv').config();

// Database setup
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;
// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});
// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("Connected to MongoDB!");
});

const Schema = require("./schema.js");

const CityModel = Schema.CityModel;
const MeetUpModel = Schema.MeetUpModel;
const BoardGameModel = Schema.BoardGameModel;
const UserModel = Schema.UserModel;

//Delete all Users
UserModel.remove({}, function (err) {
    console.log(err)
});

//Delete Locations
CityModel.remove({}, function (err) {
    console.log(err)
});


//Create locations
const atlanta = new CityModel({city: 'Atlanta'})
const boston = new CityModel({city: 'Boston'})
const miami = new CityModel({city: 'Miami'})
const sanDiego = new CityModel({city: 'San Diego'})

//Create Meet Ups
const ponceCity = new MeetUpModel({location: 'Ponce City', date: 'Wednesdays', time: '6:30pm'})
const tapRoom = new MeetUpModel({location: 'Tap Room', date: 'Thursdays', time: '7:00pm'})
const krogStreet = new MeetUpModel({location: 'Krog Street Market', date: 'Saturday', time: '12:00pm'})
const brotherMotto = new MeetUpModel({location: 'Brother Motto', date: 'Sunday', time: '1:00pm'})

//Create Games
const catan = new BoardGameModel({name: 'Settlers of Catan'})
const scavengers = new BoardGameModel({name: 'Arctic Scavengers'})
const resistance = new BoardGameModel({name: 'Resistance'})
const pandemic = new BoardGameModel({name: 'Pandemic'})

//Create User
const john = new UserModel({name: "John"})


// Assigning Board Games to Meetups, Meet ups to Board Games
const boardGames = [catan, scavengers, resistance, pandemic]
const meetUps = [ponceCity, tapRoom, krogStreet, brotherMotto]
const cities = [atlanta, boston, miami, sanDiego]



cities.forEach((city) => {
    console.log('test 1' + city)
    city.meetUp = meetUps
    console.log('test 2' + city)

    city.meetUp.forEach((meetUp) => {
        meetUp.boardGame = boardGames
    })

    city.save()
        .then((city) => {
            console.log(`${city.city} saved!`)
        })
        .catch((error) => {
            console.log(error)
        })
})

db.close();