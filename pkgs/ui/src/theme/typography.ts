import type { ThemeOptions} from '@mui/material';
import { createTheme } from '@mui/material';

const { breakpoints } = createTheme();

export const typography: ThemeOptions['typography'] = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Public Sans',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontSize: '48px',
    lineHeight: '48px',
    fontWeight: 600,
    [breakpoints.down('sm')]: {
      fontSize: '42px',
      lineHeight: '42px',
    },
  },
  h2: {
    fontSize: '36px',
    lineHeight: '36px',
    fontWeight: 600,
    // [breakpoints.down('sm')]: {},
  },
  h3: {
    fontSize: '30px',
    lineHeight: '30px',
    fontWeight: 600,
    // [breakpoints.down('sm')]: {},
  },
  h4: {
    fontSize: '48px',
    lineHeight: '48px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  h5: {
    fontSize: '36px',
    lineHeight: '36px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  h6: {
    fontSize: '30px',
    lineHeight: '30px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  subtitle1: {
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 600,
    // [breakpoints.down('sm')]: {},
  },
  subtitle2: {
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  body1: {
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  body2: {
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  caption: {
    fontSize: '14px',
    lineHeight: '14px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  overline: {
    textTransform: 'none',
    // [breakpoints.down('sm')]: {},
  },
  button: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
    // [breakpoints.down('sm')]: {},
  },
};
