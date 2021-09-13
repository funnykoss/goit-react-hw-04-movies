import s from './MovieDetailsPageView.module.css';

export default function MovieDetailsPageView({ movie }) {
  return (
    <div className={s.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.original_title}
        width="300"
        className={s.image}
      />
      <div>
        <h2 className={s.movieTitle}>{movie.original_title}</h2>
        <p className={s.movieInfo}>
          User score:
          <span className={s.infoSum}>{movie.vote_average}</span>
        </p>
        <p className={s.movieInfo}>
          Overview:
          <span className={s.infoSum}>{movie.overview}</span>
        </p>
        <p className={s.movieInfo}>
          Genres:
          <span className={s.infoSum}>
            {movie.genres.map(genre => genre.name).join(' / ')}
          </span>
        </p>
      </div>
    </div>
  );
}
