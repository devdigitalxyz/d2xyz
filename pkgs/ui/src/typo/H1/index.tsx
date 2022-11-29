import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type H1Props = TypographyBaseProps;

export const H1: FC<H1Props> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='h1' {...props}>
      {children}
    </TypographyBase>
  );
};
