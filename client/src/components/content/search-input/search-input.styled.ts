import { createTheme, SxProps } from "@mui/material";

export const textFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".css-1eqo9x0-MuiInputBase-root-MuiInput-root:after": {
            borderBottom: "2px solid #5A698F"
          },
          ".css-1eqo9x0-MuiInputBase-root-MuiInput-root:before": {
            border: "none"
          },
          ":hover": {
            ".css-1eqo9x0-MuiInputBase-root-MuiInput-root:before": {
              border: "none"
            },
          }
        }
      }
    }, 
    MuiInput: {
      styleOverrides: {
        input: {
          color: "#fff",
          fontSize: "24px",
          "::placeholder": {
            color: "#87898E",
            paddingLeft: "0.8rem",
            fontSize: "24px"
          },
        }
      }
    }
  }
});

export const searchIconStyle: SxProps = {
  color: "#fff",
  pr: 2
};
