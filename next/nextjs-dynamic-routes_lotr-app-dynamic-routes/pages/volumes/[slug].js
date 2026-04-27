import BookCard from "@/components/BookCard";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function FoundVolume() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;
  const foundVolume = volumes.find((volume) => volume.slug === slug);

  return <BookCard foundVolume={foundVolume} />;
}
