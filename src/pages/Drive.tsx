import { Fab, Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import AddIcon from "@material-ui/icons/Add";

const Drive: React.FC = () => {
    const classes = useStyles();
    return (
        <StandardContainer>
            <Grid item xs={12} md={12} lg={12}>
                <Paper className={clsx(classes.paper)}>drive</Paper>
            </Grid>
            <Fab
                size="medium"
                color="secondary"
                aria-label="Add Project"
                className={classes.fabMargin}
            >
                <AddIcon />
            </Fab>
        </StandardContainer>
    );
};

export default Drive;
