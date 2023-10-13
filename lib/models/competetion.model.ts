import mongoose from "mongoose";

// Define the schema for the competition table
const competitionSchema = new mongoose.Schema({
  competition_id: {
    type: String,
    required: true,
  },
  competition_code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sub_type: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  country_id: {
    type: Number,
    required: true,
  },
  country_name: {
    type: String,
    required: true,
  },
  domestic_league_code: {
    type: String,
    required: true,
  },
  confederation: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Competition =
  mongoose.models.Competition ||
  mongoose.model("Competition", competitionSchema);
export default Competition;
