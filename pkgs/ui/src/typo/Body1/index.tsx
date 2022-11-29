import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type Body1Props = TypographyBaseProps;

export const Body1: FC<Body1Props> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='body1' {...props}>
      {children}
    </TypographyBase>
  );
};
