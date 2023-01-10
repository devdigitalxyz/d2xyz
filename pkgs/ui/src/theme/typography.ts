import type { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material';

const { breakpoints } = createTheme();

export const typography: ThemeOptions['typography'] = {
  fontFamily: [
    'Public Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontSize: '36px',
    lineHeight: '42px',
    fontWeight: 700,
    [breakpoints.down('sm')]: {
      fontSize: '36px',
      lineHeight: '42px',
    },
  },
  h2: {
    fontSize: '30px',
    lineHeight: '39px',
    fontWeight: 700,
    // [breakpoints.down('sm')]: {},
  },
  h3: {
    fontSize: '26px',
    lineHeight: '33px',
    fontWeight: 700,
    // [breakpoints.down('sm')]: {},
  },
  h4: {
    fontSize: '24px',
    lineHeight: '31px',
    fontWeight: 700,
    // [breakpoints.down('sm')]: {},
  },
  h5: {
    fontSize: '21px',
    lineHeight: '28px',
    fontWeight: 700,
    // [breakpoints.down('sm')]: {},
  },
  h6: {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 700,
    // [breakpoints.down('sm')]: {},
  },
  subtitle1: {
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: 700,
    // [breakpoints.down('sm')]: {},
  },
  subtitle2: {
    fontSize: '17px',
    lineHeight: '19px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  body1: {
    fontSize: '16px',
    lineHeight: '23px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  body2: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  caption: {
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 400,
    // [breakpoints.down('sm')]: {},
  },
  overline: {
    textTransform: 'none',
    // [breakpoints.down('sm')]: {},
  },
  button: {
    fontSize: '15px',
    fontWeight: 700,
    textTransform: 'none',
    // [breakpoints.down('sm')]: {},
  },
};
