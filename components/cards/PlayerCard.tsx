import Image from "next/image";

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

export const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
          src={player.image_url}
          alt="profile photo"
          width={96}
          height={96}
          priority
          className="rounded-full object-contain"
        />
      </div>
      <div>
        <h2>{player.name}</h2>
        {player.country_of_citizenship && (
          <p>Citizenship: {player.country_of_citizenship}</p>
        )}
        <p className="whitespace-pre ...">
          Market Cap: {player.highest_market_value_in_eur} EUR
        </p>
      </div>
    </div>
  );
};
