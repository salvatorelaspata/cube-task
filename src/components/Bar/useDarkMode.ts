import { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { BG_DARK, BG_LIGHT, PAPER_DARK, PAPER_LIGHT, PRIMARY_DARK, PRIMARY_LIGTH, SECONDARY_DARK, SECONDARY_LIGHT } from '../../config/constants';

export function useDarkMode(initialValue: boolean) {
   const [darkState, setDarkState] = useState(initialValue);

   const darkTheme = createMuiTheme({
      palette: {
         type: darkState ? "dark" : "light",
         primary: {
            main: darkState ? PRIMARY_DARK : PRIMARY_LIGTH,
         },
         secondary: {
            main: darkState ? SECONDARY_DARK : SECONDARY_LIGHT,
         },
         background: {
            paper: darkState ? PAPER_DARK : PAPER_LIGHT,
            default: darkState ? BG_DARK : BG_LIGHT
         }
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
