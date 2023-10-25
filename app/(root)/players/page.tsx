import { PlayerCard } from "@/components/cards/PlayerCard";
import { fetchPlayerDetails } from "@/lib/actions/player.actions";

interface Player {
  player_id: number;
  first_name: string;
  last_name: string;
  name: string;
  last_season: number;
  current_club_id: number;
  player_code: string;
  country_of_birth: string;
  city_of_birth: string;
  country_of_citizenship: string;
  date_of_birth: string;
  sub_position: string;
  position: string;
  foot: string;
  height_in_cm: number;
  highest_market_value_in_eur: number;
  agent_name: string;
  image_url: string;
  url: string;
  current_club_domestic_competition_id: string;
  current_club_name: string;
}

export default async function Home() {
  let players: any;
  players = await fetchPlayerDetails();
  return (
    <main className="main-container">
      <table>
        <thead>
          <tr>
            <th className="text-right">Name</th>
            <th>Position</th>
            <th>Club Name</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: Player, index: number) => (
            <>
              <tr key={player.player_id} className="text-slate-100 text-center">
                <td className="mr-1 text-rose-50 text-right cursor-pointer">
                  {player.name}
                </td>
                <td>{player.position}</td>
                <td>{player.current_club_name}</td>
              </tr>
              <tr>
                <PlayerCard player={player} />
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </main>
  );
}
