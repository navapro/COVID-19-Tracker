import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core' ;
import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props)
    return(
        <div className = {styles.container}>
            <Grid contaner spacing = {3} justify = "center">
                <Grid item component = {Card} >
                    <CardContent> 
                        <Typography color = "textDecodary"> Infected</Typography>
                        <Typography varaint = "h5"> REAL DATA </Typography>
                        <Typography color = "textSecondary">DATE</Typography>
                        <Typography varaint = "body2"> # of active cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;