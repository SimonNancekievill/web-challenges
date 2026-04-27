import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Lotr1() {
  const book3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <span>
        <Link href="/volumes">← All Volumes</Link>
      </span>
      <h1>{book3.title}</h1>
      <p>{book3.description}</p>
      {book3.books.map((book) => {
        return (
          <ul key={book3.slug}>
            <li>Title: {book.title}</li>
            <li>Ordinal: {book.ordinal}</li>
          </ul>
        );
      })}
      <Image alt="book cover" width={140} height={230} src={book3.cover} />
      <section>
        <span>
          <Link href="/volumes/the-two-towers">← Previous Volume</Link>
          <Link href="">Next Volume →</Link>
        </span>
      </section>
    </>
  );
}
