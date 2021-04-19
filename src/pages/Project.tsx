import { Fab, Grid, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../components/DrawerMenu/useStyles';
import StandardContainer from '../components/layout/StandardContainer';

const Project: React.FC = () => {
     const classes = useStyles();
     return (
          <>
               <StandardContainer>
                    <Grid item xs={12} md={12} lg={12}>
                         <Paper className={clsx(classes.paper)}>
                              Progetti
                         </Paper>
                    </Grid>
               </StandardContainer>
               <Fab
                    size='medium'
                    color='secondary'
                    aria-label='Add Project'
                    className={classes.fabMargin}
               >
                    <AddIcon />
               </Fab>
          </>
     );
};

export default Project;
