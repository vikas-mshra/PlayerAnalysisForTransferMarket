"use server";

import Player from "../models/player.model"; // Import your Player model
import mongoose from "mongoose";
import { connectToDB } from "../mongoose";

export async function fetchPlayerDetails() {
  try {
    connectToDB(); // Connect to the database

    const topPlayers = await Player.find()
      .sort({ highest_market_value_in_eur: -1 }) // Sort by market value in descending order
      .limit(5); // Limit the result to the top 5 players

    if (topPlayers.length > 0) {
      console.log("Top 5 Players by Market Value:");
      topPlayers.forEach((player, index) => {
        console.log(
          `#${index + 1}: ${player.name}, Market Value: €${
            player.highest_market_value_in_eur
          }`
        );
      });
    } else {
        console.log("No players exist");
    }
  } catch (error) {
    console.error("Error fetching player details:", error);
  }
}

// Call the function to fetch and print player details
// fetchPlayerDetails(598);
