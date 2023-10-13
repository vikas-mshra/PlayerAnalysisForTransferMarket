import mongoose from "mongoose";

// Define the schema for the club table
const clubSchema = new mongoose.Schema({
  club_id: {
    type: Number,
    required: true,
  },
  club_code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  domestic_competition_id: {
    type: String,
    required: true,
  },
  squad_size: {
    type: Number,
    required: true,
  },
  average_age: {
    type: Number,
    required: true,
  },
  foreigners_number: {
    type: Number,
    required: true,
  },
  foreigners_percentage: {
    type: Number,
    required: true,
  },
  national_team_players: {
    type: Number,
    required: true,
  },
  stadium_name: {
    type: String,
    required: true,
  },
  stadium_seats: {
    type: Number,
    required: true,
  },
  net_transfer_record: {
    type: String,
    required: true,
  },
  last_season: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Club = mongoose.models.Club || mongoose.model("Club", clubSchema);

export default Club;
