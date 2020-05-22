import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Card.module.css';

import cx from 'classnames';
import CountUp from 'react-countup';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate} }) => {
if(!confirmed){
    return "Lodding Wait a Second..."
}
   
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center' >

               
            <Grid item component={Card} xs={26} md={3} className={cx (styles.card, styles.infected)}  >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Infected</Typography>
                        <Typography variant="h5">
                        <CountUp
                        start={0} end={confirmed.value} duration={2.8} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active  cases by covid19</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={13} md={3} className={cx (styles.card, styles.recovered)}  >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp
                        start={0} end={recovered.value} duration={2.8} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from covid19</Typography>
                    </CardContent>
                </Grid>


               
                <Grid item component={Card} xs={13} md={3} className={cx (styles.card, styles.deaths)}  >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Death</Typography>
                        <Typography variant="h5">
                        <CountUp
                        start={0} end={deaths.value} duration={2.8} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Death  by covid19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );

}
export default Cards;