import PageHeading from '../components/PageHeading/PageHeading';
import MoviesListView from '../views/MoviesListView';

export default function HopePageView(films) {
  return (
    <>
      <PageHeading text="Tranding movie" />
      <MoviesListView />
      
    </>
  );
}
