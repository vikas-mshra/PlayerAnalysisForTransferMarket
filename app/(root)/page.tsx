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
  console.log(players);
  return (
    <main>
      <h1>Welcome!!</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Club Name</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: Player, index: number) => (
            <tr key={player.player_id}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.current_club_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
