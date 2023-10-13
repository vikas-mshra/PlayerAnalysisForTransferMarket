import mongoose from "mongoose";

// Define the schema for the player table
const playerSchema = new mongoose.Schema({
  player_id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  last_season: {
    type: Number,
    required: true,
  },
  current_club_id: {
    type: Number,
    required: true,
  },
  player_code: {
    type: String,
    required: true,
  },
  country_of_birth: {
    type: String,
    required: true,
  },
  city_of_birth: {
    type: String,
    required: true,
  },
  country_of_citizenship: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  sub_position: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  highest_market_value_in_eur: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  current_club_domestic_competition_id: {
    type: String,
    required: true,
  },
  current_club_name: {
    type: String,
    required: true,
  },
});

const Player = mongoose.models.Player || mongoose.model("Player", playerSchema);

export default Player;
