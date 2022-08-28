import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import HeaderOnly from '~/Layout/HeaderOnly';
import Live from '~/pages/Live';
import config from '~/config';
const publicRoutes = [
  {
    path: config.routes.home,
    Component: Home,
  },
  {
    path: config.routes.following,
    Component: Following,
  },
  {
    path: config.routes.live,
    Component: Live,
  },
  {
    path: config.routes.profile,
    Component: Profile,
  },
  {
    path: config.routes.upload,
    Component: Upload,
    Layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    Component: Search,
    Layout: null,
  },
];
export default publicRoutes;
