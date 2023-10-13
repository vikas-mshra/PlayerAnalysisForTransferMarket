import { fetchPlayerDetails } from "@/lib/actions/player.actions";

export default async function Home() {

  fetchPlayerDetails();
  return (
    <main>
      <h1>
        Welcome!!
      </h1>
    </main>
  )
}
