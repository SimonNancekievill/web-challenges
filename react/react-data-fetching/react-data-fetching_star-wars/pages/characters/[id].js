import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = async (url) => {
    const res = await fetch(url);
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  };
  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher,
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const { name, eye_color, height, birth_year } = data;
  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
