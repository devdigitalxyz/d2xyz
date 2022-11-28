import type { ThemeOptions } from '@mui/material';

export const overrides: ThemeOptions['components'] = {
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: '0px 9px 15px rgba(3, 2, 1, 0.3)',
        border: '1px solid rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
