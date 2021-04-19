import React from 'react';
import { Button, Container, Grid, Paper, Switch } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from '../components/DrawerMenu/useStyles';

interface DashboardProps {
   darkState: boolean;
   handleThemeChange: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
   darkState,
   handleThemeChange,
}) => {
   const classes = useStyles();
   const fixedHeightPaper = clsx(classes.paper);
   return (
      <>
         <Container maxWidth='lg' className={classes.container}>
            <Grid container spacing={3}>
               {/* Chart */}
               <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                     Chart
                     <Button color='primary'>Primary</Button>
                     <Button color='secondary'>Secondary</Button>
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
                        color='primary'
                        checked={darkState}
                        onChange={handleThemeChange}
                     />
                     <Switch
                        color='secondary'
                        checked={darkState}
                        onChange={handleThemeChange}
                     />
                     <Switch
                        color='default'
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
      </>
   );
};

export default Dashboard;
