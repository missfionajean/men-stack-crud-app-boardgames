// importing mongoose package
const mongoose = require("mongoose");

// defining schema for each board game
const gameSchema = new mongoose.Schema({
	name: String,
	minPlayers: Number,
	maxPlayers: Number,
	playTime: Number,
	mechanics: Array,
	advanced: Boolean,
});

// exporting model for use in other files
module.exports = mongoose.model("boardgame", gameSchema);
