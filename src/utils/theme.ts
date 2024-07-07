"use client";

import { Nunito } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const nunito = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  // interface BreakpointOverrides {
  //   xs: true;
  //   sm: true;
  //   md: true;
  //   lg: true;
  //   xl: true;
  // }
  interface PaletteOptions {
    custom?: {
      blue: string;
      green: string;
      yellow: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  palette: {
    custom: {
      blue: "#03a9f4",
      green: "rgb(76, 175, 80)",
      yellow: "#d0e0f9",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "rgb(255, 208, 24)",
          },
        },
      },
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 400,
  //     sm: 600,
  //   },
  // },
});

export default theme;
