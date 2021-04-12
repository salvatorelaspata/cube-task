import { createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { lightBlue, red, indigo, amber } from "@material-ui/core/colors";

export function useDarkMode(initialValue: boolean) {
   const [darkState, setDarkState] = useState(initialValue);

   const palletType = darkState ? "dark" : "light";
   const mainPrimaryColor = darkState ? indigo[500] : lightBlue[500];
   const mainSecondaryColor = darkState ? amber[900] : red[500];
   const darkTheme = createMuiTheme({
      palette: {
         type: palletType,
         primary: {
            main: mainPrimaryColor,
         },
         secondary: {
            main: mainSecondaryColor,
         },
      },
   });
   const handleThemeChange = () => {
      setDarkState(!darkState);
   };

   return {
      handleThemeChange,
      darkTheme,
      darkState,
   };
}
