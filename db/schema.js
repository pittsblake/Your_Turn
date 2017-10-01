const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoardGameSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    }
})

const MeetUpSchema = new Schema ({
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    boardGame: [BoardGameSchema]
})

const CitySchema = new Schema ({
    city: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    meetUp: [MeetUpSchema]
})

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const CityModel = mongoose.model('City', CitySchema)
const MeetUpModel = mongoose.model('MeetUp', MeetUpSchema)
const BoardGameModel = mongoose.model('Board Game', BoardGameSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    CityModel: CityModel,
    MeetUpModel: MeetUpModel,
    BoardGameModel: BoardGameModel,
    UserModel: UserModel
}