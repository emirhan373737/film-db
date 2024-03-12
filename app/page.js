import Image from "next/image";
import styles from "./page.module.css";
import { getTrendingMovies } from "@/utils/requests";
import Card from "./components/Card";

export default async function HomePage() {
  const movies = await getTrendingMovies();
  return (
    <div className="container my-3">
      <h1>En Çok Trend Olan Filmler</h1>
      <div className="d-flex flex-wrap gap-3">
        {movies.map((movie) => {
          return <Card movie={movie}> </Card>;
        })}
      </div>
    </div>
  );
}
