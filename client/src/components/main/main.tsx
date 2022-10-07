import React, { FC } from "react";
import { Grid } from "@mui/material";
import { Content } from "../content/content";
import { Menu } from "../menu/menu";

export const Main: FC = () => {
  return (
    <Grid container display="flex" flexWrap="nowrap" component="main">
      <Grid item width="200px" py={4} pl={4} component="aside">
        <Menu />
      </Grid>
      <Grid item width="100%"  style={{ overflowX: "hidden" }} component="section">
        <Content />
      </Grid>
    </Grid>
  );
};
