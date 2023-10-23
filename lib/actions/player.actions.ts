"use server";

import Player from "../models/player.model"; // Import your Player model
import { connectToDB } from "../mongoose";

export async function fetchPlayerDetails() {
  try {
    await connectToDB();

    const topPlayers = Player.find()
      .sort({ highest_market_value_in_eur: -1 })
      .limit(50); // Limit the result to the top 5 players
      
    return topPlayers;
  } catch (error) {
    console.error("Error fetching player details:", error);
  }
}