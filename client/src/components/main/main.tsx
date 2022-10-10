import React, { FC } from "react";
import { Grid } from "@mui/material";
import { Content } from "../content/content";
import { Menu } from "../menu/menu";

export const Main: FC = () => {
  return (
    <Grid container display="flex" flexWrap="nowrap" component="main" direction={{
      xs: "column",
      md: "row"
    }}>
      <Grid item component="aside" display={{
        xs: 'flex',
        md: "block"
      }} width={{
        xs: "100%",
        md: "200px"
      }} py={{
        xs: 0,
        md: 4
      }} pl={{
        xs: 0,
        md: 4
      }}>
        <Menu />
      </Grid>
      <Grid item width="100%"  style={{ overflowX: "hidden" }} component="section">
        <Content />
      </Grid>
    </Grid>
  );
};
