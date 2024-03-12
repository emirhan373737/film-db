import { getMovieDetails, getSimilarMovies } from "@/utils/requests";
async function MovieDetailsPage({ params }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  const movieDetails = await getMovieDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);

  return (
    <div className="my-4 mx-3">
      <div className="d-flex align-items-center">
        <div className="col-3">
          <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" />
        </div>
        <div className="mx-5">
          <h3>{movieDetails.title} </h3>
          <div className="d-flex">
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">
              {movieDetails.release_date}
            </p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">
              {movieDetails.original_language}
            </p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">
              {movieDetails.status}
            </p>
          </div>
          <div>
            <p>
              {movieDetails.genres.map((genre) => {
                return (
                  <span
                    className="mx-1 p-1 bg-dark text-white me-2 rounded"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
      {/*Similar Movies*/}
      <div className="my-3">
        <h2>Benzer Filmler</h2>
        <div className="d-flex flex-wrap gap-3">
          {similarMovies.map((movie) => {
            return (
              <div>
                <img src={IMAGE_BASE_URL + movie.poster_path} />
                <div className="card-body"></div>
                <h5 className="card-title">{movie.title}</h5>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}
export default MovieDetailsPage;
