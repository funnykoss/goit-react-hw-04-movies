import { Route } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import HomePageView from './views/HomePageView';
// import MoviesListView from './views/MoviesListView';
import s from './components/AppBar/AppBar.modules.css';


export default function App() {
  return (
    <>
      <AppBar className={s.header} />
      <Route path="/" exact>
        <HomePageView />
      </Route>

     
    </>
  );
}
