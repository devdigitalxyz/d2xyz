import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { type TypographyBaseProps } from '../TypographyBase';

export type H4Props = TypographyBaseProps & Pick<TypographyProps, 'children'>;

export const H4: FC<H4Props> = ({ children, ...props }) => {
  return (
    <Typography variant='h4' component='h1' {...props}>
      {children}
    </Typography>
  );
};
