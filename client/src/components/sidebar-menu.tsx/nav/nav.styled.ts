import { SxProps } from "@mui/material";

export const NavStyle: SxProps = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2.5rem"
};

export const NavIconsStyle: SxProps = {
  marginTop: "8.5rem"
};

export const NavIcon: SxProps = {
  cursor: "pointer",
  transition: "color .2s linear",
  ":hover": {
    color: "#FC4747"
  }
};