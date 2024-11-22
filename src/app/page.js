import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/db";
export default async function Home() {
  const result = await db.query(`SELECT * FROM movies`);
  const movies = result.rows;
  console.log(movies);

  return (
    <div>
      <h2>Home</h2>
      <p>
        Welcome to Pop Culture Corner Found Footage Horror forum, the ultimate
        forum for fans of chilling, immersive horror experiences. Here, you can
        explore and discuss the scariest found footage films, documentaries, and
        videos. Create posts to share your discoveries, theories, or reviews,
        and join conversations with fellow enthusiasts who share your passion
        for this unique genre. Whether you're into creepy urban legends,
        terrifying tapes, or mysterious footage, there's a place for you.
        Comment, debate, and dive deep into the heart-pounding world of found
        footage horror—where every clip might just leave you questioning what's
        real. Join the fear today!
      </p>

      <h3>few movie suggetions to check out</h3>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h3>
              {movie.title} - {movie.year}
            </h3>
            {/* <img src={movie.url} alt="poster" /> */}
            {/* <Image src={movie.url} alt="poster" width={150} height={100} /> */}
          </div>
        );
      })}
    </div>
  );
}
