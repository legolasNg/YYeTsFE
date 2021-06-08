import * as React from "react";
import { Container, createStyles, Divider, Grid, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import { toAbsoluteUrl } from "utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(6),
    },
    footer: {
      padding: theme.spacing(3, 0),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(8, 0),
      },
    },
    logo: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      "& img": {
        width: 28,
        height: 28,
        marginRight: theme.spacing(1.5),
      },
    },
    list: {
      marginBottom: theme.spacing(4),
      "& h3": {
        fontWeight: theme.typography.fontWeightMedium,
      },
      "& ul": {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        padding: "6px 0",
        color: theme.palette.text.secondary,
      },
    },
  })
);

export function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider />
      <Container maxWidth="md">
        <footer className={classes.footer}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <div className={classes.logo}>
                <img src={toAbsoluteUrl("/logo.png")} alt="logo" />
                <Link color="inherit" variant="body1" component={RouterLink} to="/">
                  YYeTs
                </Link>
              </div>
            </Grid>

            <Grid item xs={6} sm={4} className={classes.list}>
              <Typography component="h2" gutterBottom>
                作者
              </Typography>
              <ul>
                <li>
                  <Link href="https://t.me/BennyThink" color="inherit" variant="body1">
                    Benny 小可爱
                  </Link>
                </li>
                <li>
                  <Link href="https://dmesg.app/" color="inherit" variant="body1">
                    Blog
                  </Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={6} sm={4} className={classes.list}>
              <Typography component="h2" gutterBottom>
                资源
              </Typography>
              <ul>
                <li>
                  <Link href="https://t.me/yyets_bot" color="inherit" variant="body1">
                    Telegram Bot
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/mikuri520" color="inherit" variant="body1">
                    Telegram Channel
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>

          <Typography color="textSecondary" variant="body2">
            遵循 &nbsp;
            <Link color="inherit" href="https://github.com/mui-org/material-ui/blob/master/LICENSE">
              MIT
            </Link>
            &nbsp;发布， Copyright © 2019 - {new Date().getFullYear()} YYeTs。
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Web Design by&nbsp;
            <Link href="https://blog.zuiyu1818.cn" color="secondary">
              Zuiyu
            </Link>
          </Typography>
        </footer>
      </Container>
    </div>
  );
}
