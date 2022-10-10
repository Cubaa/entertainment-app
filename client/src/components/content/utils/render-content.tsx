import { Bookmarked } from "../bookmarked/bookmarked";
import { Home } from "../home/home"
import { Movies } from "../movies/movies";
import { TvSeries } from "../tv-series/tv-series";

export const renderContent = (navLink: string): JSX.Element | null => {
  switch (navLink) {
    case "home":
      return <Home />;
    case "movies":
      return <Movies />;
    case "series":
      return <TvSeries />;
    case "bookmarked":
      return <Bookmarked />;
    default:
      return null;
  };
};