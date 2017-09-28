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

const LocationModel = Schema.LocationModel;
const MeetUpModel = Schema.MeetUpModel;
const BoardGameModel = Schema.BoardGameModel;
const UserModel = Schema.UserModel;

//Delete all Users
UserModel.remove({}, function (err) {
    console.log(err)
});

//Delete Locations
LocationModel.remove({}, function (err) {
    console.log(err)
});


//Create locations
const atlanta = new LocationModel({city: 'Atlanta'})
const boston = new LocationModel({city: 'Boston'})
const miami = new LocationModel({city: 'Miami'})
const sanDiego = new LocationModel({city: 'San Diego'})

//Create Meet Ups
const ponceCity = new LocationModel({location: 'Ponce City', date: 'Wednesdays', time: '6:30pm'})
const tapRoom = new LocationModel({location: 'Tap Room', date: 'Thursdays', time: '7:00pm'})
const krogStreet = new LocationModel({location: 'Krog Street Market', date: 'Saturday', time: '12:00pm'})
const brotherMotto = new LocationModel({location: 'Brother Motto', date: 'Sunday', time: '1:00pm'})

//Create Games
const catan = new BoardGameModel({name: 'Settlers of Catan'})
const scavengers = new BoardGameModel({name: 'Arctic Scavengers'})
const catan = new BoardGameModel({name: 'Settlers of Catan'})
const catan = new BoardGameModel({name: 'Settlers of Catan'})