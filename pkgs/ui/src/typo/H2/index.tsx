import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type H2Props = TypographyBaseProps;

export const H2: FC<H2Props> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='h1' {...props}>
      {children}
    </TypographyBase>
  );
};
