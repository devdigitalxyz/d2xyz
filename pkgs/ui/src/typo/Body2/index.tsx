import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type Body2Props = TypographyBaseProps;

export const Body2: FC<Body2Props> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='body2' {...props}>
      {children}
    </TypographyBase>
  );
};
