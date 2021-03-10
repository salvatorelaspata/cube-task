import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

interface ITEM_MENU_PROP {
   id: number;
   icon: JSX.Element;
   text: string;
}

interface ITEMS_MENU_PROPS {
   items: ITEM_MENU_PROP[];
}
export const ITEMS_MENU: ITEMS_MENU_PROPS = {
   items: [
      { id: 1, icon: <DashboardIcon />, text: "Dashboassssrd" },
      { id: 2, icon: <ShoppingCartIcon />, text: "Orders" },
      { id: 3, icon: <PeopleIcon />, text: "Customers" },
      { id: 4, icon: <BarChartIcon />, text: "Reports" },
      { id: 5, icon: <LayersIcon />, text: "Integrations" },
   ],
};
