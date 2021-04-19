import React, { useState } from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { useStyles } from "./components/DrawerMenu/useStyles";
import { useDarkMode } from "./components/Bar/useDarkMode";

import Bar from "./components/Bar/Bar";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";

import Project from './pages/Project';
import Dashboard from './pages/Dashboard';
import Timesheet from './pages/Timesheet';
import ToDo from './pages/ToDo';

const App: React.FC = () => {

   const classes = useStyles();
   const { darkState, darkTheme, handleThemeChange } = useDarkMode(true);

   const routes = [
      {
         id: 1,
         path: "/",
         component: <Dashboard darkState={darkState} handleThemeChange={handleThemeChange} />
      },
      {
         id: 2,
         path: "/project",
         component: <Project />
      },
      {
         id: 3,
         path: "/timesheet",
         component: <Timesheet />
      },
      {
         id: 4,
         path: "/todo",
         component: <ToDo />
      }
   ];

   const [open, setOpen] = useState<boolean>(false);

   const handleDrawerOpen: () => void = () => {
      setOpen(true);
   };
   const handleDrawerClose: () => void = () => {
      setOpen(false);
   };

   return (

      <div className={classes.root}>
         <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Bar
               open={open}
               handleDrawerOpen={handleDrawerOpen}
               darkState={darkState}
               handleThemeChange={handleThemeChange}
            />
            <Router>
               <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />

               <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                  {/* ROUTING */}
                  <Switch >
                     {routes.map((route) => (
                        <Route
                           key={route.id}
                           exact path={route.path}
                        >
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
