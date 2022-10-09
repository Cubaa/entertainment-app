import { Home } from "../home/home"

export const renderContent = (navLink: string): JSX.Element | null => {
  switch (navLink) {
    case "home":
      return <Home />;
    case "movies":
      return <div style={{ color: "#fff" }}>Movies</div>;
    case "series":
      return <div style={{ color: "#fff" }}>Series</div>;
    case "bookmarked":
      return <div style={{ color: "#fff" }}>Bookmarked</div>;
    default:
      return null;
  };
};