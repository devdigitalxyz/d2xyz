import type { FC } from 'react';
import { TypographyBase, type TypographyBaseProps } from '../TypographyBase';

export type Subtitle2Props = TypographyBaseProps;

export const Subtitle2: FC<Subtitle2Props> = ({ children, ...props }) => {
  return (
    <TypographyBase variant='subtitle2' {...props}>
      {children}
    </TypographyBase>
  );
};
