import actions from './v1/actions';
import routes from './v1/routes';

// ADD COMPONENTS HERE
// import Blank from './v1/components/atoms/blank.jsx';
import Button from './v1/components/atoms/button.jsx';
import CardMedia from './v1/components/atoms/card-media.jsx';
import CardText from './v1/components/atoms/card-text.jsx';
import CardTitle from './v1/components/atoms/card-title.jsx';
import Logo from './v1/components/atoms/logo.jsx';
import NavLink from './v1/components/atoms/nav-link.jsx';
import Spinner from './v1/components/atoms/spinner.jsx';
import TextField from './v1/components/atoms/text-field.jsx';
import Toggle from './v1/components/atoms/toggle.jsx';
import Tooltip from './v1/components/atoms/tooltip.jsx';

// import Banner from './v1/components/molecules/banner.jsx';
import CardAction from './v1/components/molecules/card-action.jsx';
import CardMenu from './v1/components/molecules/card-menu.jsx';
import List from './v1/components/molecules/list.jsx';
import MarkdownEditor from './v1/components/molecules/markdown-editor.jsx';
import Nav from './v1/components/molecules/nav.jsx';

// import BannerSlider from './v1/components/organisms/banner-slider.jsx';
import Card from './v1/components/organisms/card.jsx';
import Drawer from './v1/components/organisms/drawer.jsx';
import Form from './v1/components/organisms/form.jsx';
import Header from './v1/components/organisms/header.jsx';

import GeneralGrid from './v1/components/templates/general-grid.jsx';
import GeneralLayout from './v1/components/templates/general-layout.jsx';
import Page from './v1/components/templates/page.jsx';

export {
  // Atoms
  Blank,
  Button,
  CardMedia,
  CardText,
  CardTitle,
  Logo,
  NavLink,
  Spinner,
  TextField,
  Toggle,
  Tooltip,

  // Molecules
  Banner,
  CardAction,
  CardMenu,
  List,
  MarkdownEditor,
  Nav,

  // Organisms
  BannerSlider,
  Card,
  Drawer,
  Form,
  Header,

  // Templates
  GeneralGrid,
  GeneralLayout,
  Page
};

export default {
  actions,
  load: () => null,
  routes
};
