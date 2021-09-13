/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

// import HomePageView from './views/HomePageView';
// import MoviesPageSearch from './views/MoviesPageSearch/MoviesPageSearch';
// import MoviePage from './views/MoviePage/MoviePage';
import s from './components/AppBar/AppBar.modules.css';

const HomePageView = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "home-page" */),
);
const MoviesPageSearch = lazy(() =>
  import(
    './views/MoviesPageSearch/MoviesPageSearch' /* webpackChunkName: "movieSearch-page" */
  ),
);
const MoviePage = lazy(() =>
  import('./views/MoviePage/MoviePage' /* webpackChunkName: "movie-page" */),
);

export default function App() {
  return (
    <Container>
      <AppBar className={s.header} />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageSearch />
          </Route>

          <Route path="/movies/:movieId">
            <MoviePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
