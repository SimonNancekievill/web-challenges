import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Lotr1() {
  const book1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <span>
        <Link href="/volumes">← All Volumes</Link>
      </span>
      <h1>{book1.title}</h1>
      <p>{book1.description}</p>
      {book1.books.map((book) => {
        return (
          <ul key={book1.slug}>
            <li>Title: {book.title}</li>
            <li>Ordinal: {book.ordinal}</li>
          </ul>
        );
      })}
      <Image alt="book cover" width={140} height={230} src={book1.cover} />
      <section>
        <span>
          <Link href="">← Previous Volume</Link>
          <Link href="/volumes/the-two-towers">Next Volume →</Link>
        </span>
      </section>
    </>
  );
}
