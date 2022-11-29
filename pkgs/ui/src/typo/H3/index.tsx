import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type H3Props = TypographyBaseProps;

export const H3: FC<H3Props> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='h3' {...props}>
      {children}
    </TypographyBase>
  );
};
