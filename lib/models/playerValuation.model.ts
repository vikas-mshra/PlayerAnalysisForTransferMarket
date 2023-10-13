import mongoose from "mongoose";

// Define the schema for the playerValuation table
const playerValuationSchema = new mongoose.Schema({
  player_id: {
    type: Number,
    required: true,
  },
  last_season: {
    type: Number,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  dateweek: {
    type: Date,
    required: true,
  },
  market_value_in_eur: {
    type: Number,
    required: true,
  },
  n: {
    type: Number,
    required: true,
  },
  current_club_id: {
    type: Number,
    required: true,
  },
  player_club_domestic_competition_id: {
    type: String,
    required: true,
  },
});

const PlayerValuation =
  mongoose.models.PlayerValuation ||
  mongoose.model("PlayerValuation", playerValuationSchema);

export default PlayerValuation;
