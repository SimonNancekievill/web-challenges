import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (!data) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  const { character } = data;

  return (
    <>
      <h1>Random Character</h1>
      <h2>
        {character.firstName} {character.lastName}
      </h2>
      <p>Twitter Name: {character.twitterName}</p>
      <p>This ist my Geohash: {character.geohash}</p>
    </>
  );
}
