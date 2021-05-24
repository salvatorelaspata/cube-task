import { Fab, Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import React, { useRef } from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Customers from "../components/customers/Customers";
import Project from "../components/project/Project";
import AddIcon from '@material-ui/icons/Add';
import CollapsibleTable from '../components/Table/CollapsibleTable';
//si andranno a gestire tutti i flussi di anagrafica
const Management = () => {
    const domRef = useRef(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const classes = useStyles();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(classes.paper)}>
                        customers
                  <div>
                            <CollapsibleTable />
                        </div>
                        <Customers />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
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
                color="primary"
                aria-label="Add Management"
                className={classes.fabMargin}
                onClick={handleClick}
            //gestire menù per selezionare la tipologia di inserimento ( commessa(admin), progetto(team leader), attività, task )
            >
                <AddIcon />
            </Fab>
            <div ref={domRef}>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <div>
                            <AddIcon color="primary" />
                  customer
               </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div>
                            <AddIcon color="primary" />
                  project
               </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <div>
                            <AddIcon color="primary" />
                  activity
               </div>
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
};

export default Management;
