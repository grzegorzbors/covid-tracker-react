import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseMedical,
  faPercentage,
  faSkull,
  faSkullCrossbones,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Loading...";
  }

  let mortalityPercentage = `${((deaths.value / confirmed.value) * 100).toFixed(
    2
  )}%`;

  return (
    <div className={styles.container}>
      <Grid container spacing={2} justify="center" row-gap="100px">
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected{" "}
              <FontAwesomeIcon
                icon={faViruses}
                className={`${styles.fontAwesome} ${styles.virus}`}
              />
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered{" "}
              <FontAwesomeIcon
                icon={faBriefcaseMedical}
                className={`${styles.fontAwesome} ${styles.medkit}`}
              />
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths{" "}
              <FontAwesomeIcon
                icon={faSkull}
                className={`${styles.fontAwesome} ${styles.skull}`}
              />
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={5}
          className={cx(styles.card, styles.mortalityPercentage)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Mortality Percentage{" "}
              <FontAwesomeIcon
                icon={faSkullCrossbones}
                className={styles.fontAwesome}
              />
              <FontAwesomeIcon
                icon={faPercentage}
                className={styles.fontAwesome}
              />
            </Typography>
            <Typography variant="h5">{mortalityPercentage}</Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Deaths vs. infections ratio</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
