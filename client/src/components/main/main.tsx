import React, { FC } from "react";
import { Grid } from "@mui/material";
import { Content } from "../content/content";
import { Menu } from "../menu/menu";

export const Main: FC = () => {
  return (
    <Grid container>
      <Grid item>
        <Menu />
      </Grid>
      <Grid item>
        <Content />
      </Grid>
    </Grid>
  );
};
