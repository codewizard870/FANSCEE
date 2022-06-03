import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({ sm: '20em', md: '52em', lg: '64em', xl: '80em' })

const theme = extendTheme(
  { 
    breakpoints,
    styles: {
      global: {
        button: {
          _hover: {
            bg: '#CEBFBF',
            color: 'black'
          },
          _focus: {
            boxShadow: 'none !important',
          }
        },
        div: {
          _focus: {
            boxShadow: 'none !important',
          }
        }
      },
    },
    textStyles: { 
      primary: {
          fontFamily: '"Raleway","Arial","sans-serif"'
      },
      secondary: {
          fontFamily: '"Lato","Arial","sans-serif"'
      },
    },
  },
)

export default theme
