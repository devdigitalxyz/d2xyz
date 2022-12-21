import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type TypographyBaseProps = Pick<
  TypographyProps,
  | 'children'
  | 'sx'
  | 'paragraph'
  | 'gutterBottom'
  | 'color'
  | 'align'
  | 'variant'
  | 'className'
>;

export const TypographyBase: FC<TypographyBaseProps> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>;
};
