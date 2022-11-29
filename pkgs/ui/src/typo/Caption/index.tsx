import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type CaptionProps = TypographyBaseProps;

export const Caption: FC<CaptionProps> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='caption' {...props}>
      {children}
    </TypographyBase>
  );
};
