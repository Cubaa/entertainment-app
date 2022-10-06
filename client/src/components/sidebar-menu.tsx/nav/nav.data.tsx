import WindowIcon from '@mui/icons-material/Window';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { INavLink } from './nav.interface';

export const navLinks: INavLink[] = [
  {
    name: "home",
    icon: <WindowIcon fontSize='large'/>
  },
  {
    name: "movies",
    icon: <LocalMoviesIcon fontSize='large'/>
  },
  {
    name: "series",
    icon: <LiveTvIcon fontSize='large'/>
  },
  {
    name: "bookmark",
    icon: <BookmarkIcon fontSize='large'/>
  },
]