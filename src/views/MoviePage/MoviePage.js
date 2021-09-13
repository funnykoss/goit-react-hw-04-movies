import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import MovieDetailsPageView from '../../components/MovieDetailsPageView/MovieDetailsPageView';

import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import * as fetchAPI from '../../services/movieApi';
import s from './MoviePage.module.css';

export default function MoviePage() {
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchAPI.fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);
  const onGoBack = () => {
    history.push({
      pathname: location.state?.backUrl || '/',
      search: location.state?.searchValue || '',
    });
  };

  return (
    <>
      <button type="submit" onClick={onGoBack} className={s.btn}>
        Gp back
      </button>
      {movie && (
        <>
          <div className={s.wrapper}>
            <MovieDetailsPageView movie={movie} />
            <h4 className={s.addTitle}>Additional information:</h4>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: {
                  backUrl: `${location.state?.searchValue ? `/movies` : `/`}`,
                  searchValue: location.state?.searchValue || '',
                },
              }}
              className={s.link}
            >
              Cast
            </Link>
            <Link
              to={{
                pathname: `${url}/reviews`,
                state: {
                  backUrl: `${location.state?.searchValue ? `/movies` : `/`}`,
                  searchValue: location.state?.searchValue || '',
                },
              }}
              className={s.link}
            >
              Reviews
            </Link>
          </div>

          <Switch>
            <Route path={`${url}/cast`}>
              <Cast movieId={movieId} />
            </Route>
            <Route path={`${url}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}
