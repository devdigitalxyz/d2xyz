import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface CaptionProps
  extends Pick<
    TypographyProps,
    'children' | 'sx' | 'paragraph' | 'color' | 'align'
  > {}

export const Caption: FC<CaptionProps> = ({
  children,
  paragraph = true,
  ...props
}) => {
  return (
    <Typography variant='caption' paragraph={paragraph} {...props}>
      {children}
    </Typography>
  );
};
