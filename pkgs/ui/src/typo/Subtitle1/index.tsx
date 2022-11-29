import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type Subtitle1Props = TypographyBaseProps;

export const Subtitle1: FC<Subtitle1Props> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='subtitle1' {...props}>
      {children}
    </TypographyBase>
  );
};
