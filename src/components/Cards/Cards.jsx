import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cn from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs = {12} md = {3} className = {cn(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textDecodary">Infected</Typography>
            <Typography varaint="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
            </Typography>
  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">
              Number of people Infected with COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs = {12} md = {3} className = {cn(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textDecodary">Recovered</Typography>
            <Typography varaint="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">
              Number of recovereies from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs = {12} md = {3} className = {cn(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textDecodary">Deaths</Typography>
            <Typography varaint="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography varaint="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
