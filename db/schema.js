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
    game: [BoardGameSchema]
})

const LocationSchema = new Schema ({
    city: {
        type: String,
        required: true
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

const LocationModel = mongoose.model('Location', LocationSchema)
const MeetUpModel = mongoose.model('MeetUp', MeetUpSchema)
const BoardGameModel = mongoose.model('Board Game', BoardGameSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    LocationModel: LocationModel,
    MeetUpModel: MeetUpModel,
    BoardGameModel: BoardGameModel,
    UserModel: UserModel
}