import React from "react";

import clsx from "clsx";

import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

import {
   AppBar,
   Toolbar,
   Badge,
   IconButton,
   Typography,
   useTheme,
   Switch,
} from "@material-ui/core";
import { useStyles } from "../hook/useStyles";

interface BarProp {
   open: boolean;
   handleDrawerOpen: () => void;
   notificationNumber?: number;
   darkState: boolean;
   handleThemeChange: () => void;
}

const Bar: React.FC<BarProp> = ({
   open,
   handleDrawerOpen,
   notificationNumber,
   darkState,
   handleThemeChange,
}) => {
   const theme = useTheme();
   const classes = useStyles(theme);
   return (
      <AppBar
         position="absolute"
         className={clsx(classes.appBar, open && classes.appBarShift)}
      >
         <Toolbar className={classes.toolbar}>
            <IconButton
               edge="start"
               color="inherit"
               aria-label="open drawer"
               onClick={handleDrawerOpen}
               className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden
               )}
            >
               <MenuIcon />
            </IconButton>
            <Typography
               component="h1"
               variant="h6"
               color="inherit"
               noWrap
               className={classes.title}
            >
               _
            </Typography>
            <Switch
               color="secondary"
               checked={darkState}
               onChange={handleThemeChange}
            />
            <IconButton color="inherit">
               <Badge
                  badgeContent={notificationNumber || "?"}
                  color="secondary"
               >
                  <NotificationsIcon />
               </Badge>
            </IconButton>
         </Toolbar>
      </AppBar>
   );
};

export default Bar;
