import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

// const main = styled.div`
//   background-color: ${(probs) =>
//     probs.$color === "color" ? "color" : "white"};
// `;

const StyledLink = styled(Link)`
  font-family: var(--body);
`;
const StyledHeadline1 = styled.h1`
  font-family: var(--font-headline-1);
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <main>
        <StyledLink href="/volumes">← All Volumes</StyledLink>
        <StyledHeadline1>{title}</StyledHeadline1>
        <p>{description}</p>
        <ul>
          {books.map(({ ordinal, title, slug }) => (
            <li key={slug}>
              {ordinal}: <strong>{title}</strong>
            </li>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
        {previousVolume ? (
          <div>
            <Link href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </Link>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </Link>
          </div>
        ) : null}
      </main>
    </>
  );
}
