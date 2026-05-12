import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>failed to load</div>;
  const { name, description, price, currency, category } = data;

  return (
    <div>
      <h1>{name}</h1>
      <small>{category}</small>
      <span>
        <p>
          <strong>{description}</strong> {price}
          {currency}
        </p>
      </span>
    </div>
  );
}
