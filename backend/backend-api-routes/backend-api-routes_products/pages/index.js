import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>failed to load</div>;

  const products = data;
  console.log(products);
  return (
    <div>
      <h1>Products:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}, {product.price}
            {product.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}
