import type { ReactNode } from 'react';
import type {
  ButtonProps as MuiButtonProps} from '@mui/material';
import {
  Button as MuiButton
} from '@mui/material';

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    'onClick' | 'variant' | 'color' | 'sx' | 'fullWidth' | 'type' | 'disabled'
  > {
  children?: ReactNode;
}

export const Button = ({
  children,
  variant = 'contained',
  color = 'secondary',
  sx,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} color={color} sx={{ ...sx }} {...props}>
      {children}
    </MuiButton>
  );
};
