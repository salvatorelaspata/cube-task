/**
 * DRAWER MENU
 */
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Dashboard from '../pages/Dashboard';
import Project from '../pages/Project';
import Timesheet from '../pages/Timesheet';
interface ITEM_MENU_PROP {
   id: number;
   icon: JSX.Element;
   text: string;
   to: string;
}

interface ITEMS_MENU_PROPS {
   items: ITEM_MENU_PROP[];
}
export const ITEMS_MENU: ITEMS_MENU_PROPS = {
   items: [
      { id: 1, icon: <DashboardIcon />, text: "Dashboassssrd", to: "/" },
      { id: 2, icon: <ShoppingCartIcon />, text: "Project", to: "/project" },
      { id: 3, icon: <PeopleIcon />, text: "timesheet", to: "/timesheet" },
      { id: 4, icon: <BarChartIcon />, text: "Reports", to: "/" },
      { id: 5, icon: <LayersIcon />, text: "Integrations", to: "/" },
      { id: 6, icon: <PlaylistAddCheckIcon />, text: "ToDo", to: "/todo" },
   ],
};


export const routes = (darkState: boolean, handleThemeChange: () => void) => [
   {
      id: 1,
      icon: <DashboardIcon />,
      text: "Dashboassssrd",
      path: "/",
      component: <Dashboard darkState={darkState} handleThemeChange={handleThemeChange} />
   },
   {
      id: 2,
      path: "/project", icon: <ShoppingCartIcon />, text: "Project",
      component: <Project />
   },
   {
      id: 3,
      path: "/timesheet",
      icon: <PeopleIcon />, text: "Timesheet",
      component: <Timesheet />
   },
   {
      id: 4,
      path: "/",
      icon: <BarChartIcon />, text: "Reports",
      component: <Dashboard darkState={darkState} handleThemeChange={handleThemeChange} />
   },
   {
      id: 5,
      path: "/",
      icon: <LayersIcon />, text: "Integrations",
      component: <Dashboard darkState={darkState} handleThemeChange={handleThemeChange} />
   }
]

/**
 * PALETTE COLORS
 */
export const PRIMARY_DARK = '#7DB3FF';
export const PRIMARY_LIGTH = '#111827';
export const SECONDARY_DARK = '#FFFFFF';
export const SECONDARY_LIGHT = '#7DB3FF';
export const PAPER_DARK = '#1F2937';
export const PAPER_LIGHT = '#FFFFFF';
export const BG_DARK = '#111827';
export const BG_LIGHT = '#F3F6FD';