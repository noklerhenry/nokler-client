import { extendTheme } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sssm: "360px",
  ssm: "420px",
  sm: "480px",
  md: "700px",
  lg: "900px",
  xl: "1100px",
  xxl: "1350px",
  xxxl: "1550px",
  "2xl": "1536px",
}); 

const theme = extendTheme({
  fonts: {
    heading: "Anton, sans-serif",
  },
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        color: mode("#8c06f7", "#8c06f7")(props),
        bg: mode("#ffffff", "#121019")(props),
      },
    }),
  },

  components: {
    Drawer: {
      variants: {
        base: (props) => ({
          backgroundColor: mode("#ffffff", "#121019")(props),
        }),
      },
      defaultProps: {
        variant: "base",
      },
    },
    Link: {
      baseStyle: (props) => ({
        _hover: {
          backgroundColor: mode("#8c06f7", "#8c06f7")(props),
          color: mode("#ffffff", "#ffffff")(props),
        },
      }),

    },
    Button: {
      baseStyle: (props) => ({
        fontWeight: "500",
        borderRadius: "50px",

        border: "1px solid #8c06f7",
      }),

      variants: {
        red: {
          bg: "red.400",
          color: "#ffffff",
          fontSize: "10px",
          borderRadius: "20px",
          border: "none",
          padding: "4px !important",
          height: "22px",
          width: "10px",
          display: "block",
          marginBottom: "7px",
        },
        base: (props) => ({
          padding: "4px 15px",
          backgroundColor: mode("#ffffff", "#121019")(props),
          _hover: {
            backgroundColor: mode("#8c06f7", "#8c06f7")(props),
            color: mode("#ffffff", "#ffffff")(props),
          },
        }),
      },
      defaultProps: {
        variant: "base",
      },
    },
  },

  colors: {
    brand: {
      primary: "#1a365d",
      secondary: "#153e75",
      terciary: "#2a69ac",
    },
  },
});

export default theme;

// const colors = {
//   brand: {
//     primary: '#1a365d',
//     secondary: '#153e75',
//     terciary: '#2a69ac',
//   },
// }
