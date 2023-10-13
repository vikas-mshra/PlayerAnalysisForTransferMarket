import mongoose from "mongoose";

// Define the schema for the appearance table
const appearanceSchema = new mongoose.Schema({
  appearance_id: {
    type: String,
    required: true,
  },
  game_id: {
    type: Number,
    required: true,
  },
  player_id: {
    type: Number,
    required: true,
  },
  player_club_id: {
    type: Number,
    required: true,
  },
  player_current_club_id: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  player_name: {
    type: String,
    required: true,
  },
  competition_id: {
    type: String,
    required: true,
  },
  yellow_cards: {
    type: Number,
    required: true,
  },
  red_cards: {
    type: Number,
    required: true,
  },
  goals: {
    type: Number,
    required: true,
  },
  assists: {
    type: Number,
    required: true,
  },
  minutes_played: {
    type: Number,
    required: true,
  },
});

const Appearance = mongoose.models.Appearance || mongoose.model("Appearance", appearanceSchema)

export default Appearance;
