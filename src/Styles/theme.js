import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  fonts: {
    heading: 'Anton, sans-serif',
  },

  styles: {
    global: props => ({
      body: {
        color: mode('#4d194d', '#a663cc')(props),
        bg: mode('#f1faee', '#0c0f0a')(props),
      },
    }),
  },

  components: {
    Drawer:{
      variants:{
      'base': (props)=> ({
        backgroundColor: mode('#f1faee', '#0c0f0a')(props),
      })
    },
      defaultProps:{
        variant: 'base',
      }
    },
    Button: {
      baseStyle: (props)=> ({
        fontWeight: '500',
        borderRadius: '50px',
        
        border: '1px solid #8c06f7',
        
      }),
      
      variants: {
        'red': {
          bg: 'red.400',
          color: '#ffffff',
          fontSize: '10px',
          borderRadius: '20px',
          border: 'none',
          padding: '4px !important',
          height: '22px',
          width: '10px',
          display: 'block',
          marginBottom: '7px',
        },
        'base': (props) => ({
          padding: '4px 15px',
          backgroundColor: mode('#f1faee', '#0c0f0a')(props),
          _hover:{
          backgroundColor: mode('#4d194d', '#a663cc')(props),
          color: mode('#f1faee', '#0c0f0a')(props)
          },
        })
      },
      defaultProps: {
        variant: 'base',
      },
    },
  },

  colors: {
    brand: {
      primary: '#1a365d',
      secondary: '#153e75',
      terciary: '#2a69ac',
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
