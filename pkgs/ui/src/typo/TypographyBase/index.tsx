import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export type TypographyBaseProps = Pick<
  TypographyProps,
  'children' | 'sx' | 'paragraph' | 'color' | 'align' | 'variant'
>;

export const TypographyBase: FC<TypographyBaseProps> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>;
};
