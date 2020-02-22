
const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    us: { type: String, required: true },
    ps: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 },
});

const User = mongoose.model('users', usersSchema);

module.exports = User;