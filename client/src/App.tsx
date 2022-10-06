import { GlobalStyles } from "@mui/material";
import React from "react";
import { Main } from "./components/main/main";

const globalStyle = {
  body: {
    margin: 0,
    padding: 0,
    height: "100vh",
    backgroundColor: "#10141E"
  }
}

function App() {
  return (
    <>
      <GlobalStyles styles={globalStyle} />
      <Main />
    </>
  );
}

export default App;
