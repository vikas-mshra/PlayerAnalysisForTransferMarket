import mongoose from "mongoose";

// Define the schema for the game_event table
const gameEventSchema = new mongoose.Schema({
  game_event_id: {
    type: String,
    required: true,
  },
  game_id: {
    type: Number,
    required: true,
  },
  minute: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  club_id: {
    type: Number,
    required: true,
  },
  player_id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const GameEvent =
  mongoose.models.GameEvent || mongoose.model("GameEvent", gameEventSchema);

export default GameEvent;
