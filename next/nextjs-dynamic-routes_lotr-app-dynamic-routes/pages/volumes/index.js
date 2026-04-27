import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement() {
    const random = volumes[Math.floor(Math.random() * volumes.length)];
    return `/volumes/${random.slug}`;
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ title, slug }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => router.push(getRandomElement())}>
        Jump to a random Volume
      </button>
    </>
  );
}
