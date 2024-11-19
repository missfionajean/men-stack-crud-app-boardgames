// importing mongoose package
const mongoose = require("mongoose");

// defining schema for each board game
const gameSchema = new mongoose.Schema({
	gameName: String,
	minPlayers: String,
	maxPlayers: String,
	playTime: String,
    aboutGame: String,
	beginnerFriendly: Boolean,
});

// exporting model for use in other files
module.exports = mongoose.model("boardgame", gameSchema);
