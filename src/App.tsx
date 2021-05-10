import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { useStyles } from "./components/hook/useStyles";
import { useDarkMode } from "./components/hook/useDarkMode";

import Bar from "./components/Bar/Bar";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";

import { ITEMS_MENU } from "./config/constants";
import { useDrawer } from "./components/hook/useDrawer";

const App: React.FC = () => {
   const classes = useStyles();
   const { darkState, darkTheme, handleThemeChange } = useDarkMode(true);
   const {
      open: isOpenDrawer,
      handleDrawerOpen,
      handleDrawerClose,
   } = useDrawer(false);

   return (
      <div className={classes.root}>
         <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Bar
               open={isOpenDrawer}
               handleDrawerOpen={handleDrawerOpen}
               darkState={darkState}
               handleThemeChange={handleThemeChange}
            />
            <Router>
               <DrawerMenu
                  open={isOpenDrawer}
                  handleDrawerClose={handleDrawerClose}
               />

               <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                  {/* ROUTING */}
                  <Switch>
                     {ITEMS_MENU(darkState, handleThemeChange).map((route) => (
                        <Route key={route.id} exact path={route.path}>
                           {route.component}
                        </Route>
                     ))}
                  </Switch>
               </main>
            </Router>
         </ThemeProvider>
      </div>
   );
};

export default App;
