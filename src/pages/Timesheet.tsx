import { Grid, Paper } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { useStyles } from '../components/DrawerMenu/useStyles'
import StandardContainer from '../components/layout/StandardContainer'

const Timesheet: React.FC = () => {

     const classes = useStyles();
     return (
          <StandardContainer>
               <Grid item xs={12} md={12} lg={12}>
                    <Paper className={clsx(classes.paper)}>
                         TimeSheet
               </Paper></Grid>
          </StandardContainer>
     )

}

export default Timesheet
