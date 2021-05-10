import { Fab, Grid, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import React from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Customers from "../components/customers/Customers";
import Project from "../components/project/Project";

//si andranno a gestire tutti i flussi di anagrafica
const Management: React.FC = () => {
   const classes = useStyles();
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <>
         <StandardContainer>
            <Grid item xs={12} md={8} lg={8}>
               <Paper className={clsx(classes.paper)}>
                  customers
                  <Customers />
               </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
               <Paper className={clsx(classes.paper)}>
                  project
                  <Project />
               </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
               <Paper className={clsx(classes.paper)}>activity</Paper>
            </Grid>
         </StandardContainer>
         <Fab
            size="medium"
            color="secondary"
            aria-label="Add Management"
            className={classes.fabMargin}
            onClick={handleClick}
            //gestire menù per selezionare la tipologia di inserimento ( commessa(admin), progetto(team leader), attività, task )
         >
            <AddIcon />
         </Fab>
         <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            <MenuItem onClick={handleClose}>customer</MenuItem>
            <MenuItem onClick={handleClose}>project</MenuItem>
            <MenuItem onClick={handleClose}>activity</MenuItem>
         </Menu>
      </>
   );
};

export default Management;
