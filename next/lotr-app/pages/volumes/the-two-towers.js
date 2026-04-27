import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Lotr1() {
  const book2 = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <span>
        <Link href="/volumes">← All Volumes</Link>
      </span>
      <h1>{book2.title}</h1>
      <p>{book2.description}</p>
      {book2.books.map((book) => {
        return (
          <ul key={book2.slug}>
            <li>Title: {book.title}</li>
            <li>Ordinal: {book.ordinal}</li>
          </ul>
        );
      })}
      <Image alt="book cover" width={140} height={230} src={book2.cover} />
      <section>
        <span>
          <Link href="/volumes/the-fellowship-of-the-ring">
            ← Previous Volume
          </Link>
          <Link href="/volumes/the-return-of-the-king">Next Volume →</Link>
        </span>
      </section>
    </>
  );
}
