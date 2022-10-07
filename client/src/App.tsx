import React from "react";
import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import { Main } from "./components/main/main";

const customTheme = createTheme ({
  typography: {
   "fontFamily": `"Outfit", "Helvetica", "Arial", sans-serif`,
  }
});

const globalStyle = {
  body: {
    margin: 0,
    padding: 0,
    height: "100vh",
    backgroundColor: "#10141E"
  }
};

function App() {
  return (
    <>
      <GlobalStyles styles={globalStyle} />
      <ThemeProvider theme={customTheme}>
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;
