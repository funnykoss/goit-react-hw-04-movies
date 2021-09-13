/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from 'react-router';

import AppBar from './components/AppBar/AppBar';
import HomePageView from './views/HomePageView';
// import MoviesListView from './views/MoviesListView';
import s from './components/AppBar/AppBar.modules.css';
// import MovieDetailsPageView from './views/MovieDetailsPageView';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPageView from './views/MovieDetailsPageView';

export default function App() {
  return (
    <>
      <AppBar className={s.header} />
      <Switch>
        <Route path="/" exact>
          <HomePageView />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPageView />
        </Route>
      </Switch>
    </>
  );
}
