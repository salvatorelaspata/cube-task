import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../DrawerMenu/useStyles';

const StandardContainer: React.FC = ({ children }) => {
     const classes = useStyles();
     return (
          <div>
               <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3}>
                         {children}
                    </Grid>
               </Container>
          </div>
     )
}

export default StandardContainer
