import clsx from "clsx";
import {
   Divider,
   Drawer,
   IconButton,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   useTheme,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useStyles } from "./useStyles";
import { ITEMS_MENU } from "../../config/constants";

interface DrawerMenuProp {
   open: boolean;
   handleDrawerClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProp> = ({ open, handleDrawerClose }) => {
   const theme = useTheme();
   const classes = useStyles(theme);
   return (
      <div>
         <Drawer
            variant="permanent"
            classes={{
               paper: clsx(
                  classes.drawerPaper,
                  !open && classes.drawerPaperClose
               ),
            }}
            open={open}
         >
            <div className={classes.toolbarIcon}>
               <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
               </IconButton>
            </div>
            <Divider />

            <List>
               {ITEMS_MENU.items.map((item) => {
                  return (
                     <ListItem button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                     </ListItem>
                  );
               })}
            </List>
            {/* <Divider />
            <List>{secondaryListItems}</List> */}
         </Drawer>
      </div>
   );
};

export default DrawerMenu;
