import { Container, CssBaseline, Grid, Paper, Switch } from "@material-ui/core";

import { ThemeProvider } from "@material-ui/core/styles";

import clsx from "clsx";
import React, { useState } from "react";
import Bar from "./components/Bar/Bar";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import { useStyles } from "./components/DrawerMenu/useStyles";

import { useDarkMode } from "./components/Bar/useDarkMode";
import Figata from './components/Figata/Figata';
const App: React.FC = () => {
   const classes = useStyles();

   const { darkState, darkTheme, handleThemeChange } = useDarkMode(true);

   const [open, setOpen] = useState<boolean>(false);

   const handleDrawerOpen: () => void = () => {
      setOpen(true);
   };
   const handleDrawerClose: () => void = () => {
      setOpen(false);
   };
   const fixedHeightPaper = clsx(classes.paper);

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
            <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
            <main className={classes.content}>
               <div className={classes.appBarSpacer} />
               <Container maxWidth="lg" className={classes.container}>
                  <Grid container spacing={3}>
                     {/* Chart */}
                     <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                           Chart
                          <Figata />
                           {/* <Chart /> */}
                        </Paper>
                     </Grid>
                     {/* Recent Deposits */}
                     <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                           Deposits
                           {/* <Deposits /> */}
                        </Paper>
                     </Grid>
                     {/* Recent Orders */}
                     <Grid item xs={12}>
                        <Paper className={classes.paper}>
                           Orders
                           <Switch
                              checked={darkState}
                              onChange={handleThemeChange}
                           />
                           {/* <Orders /> */}
                        </Paper>
                     </Grid>
                  </Grid>
                  {/* <Box pt={4}>
                  <Copyright />
               </Box> */}
               </Container>
            </main>
         </ThemeProvider>
      </div>
   );
};

export default App;
