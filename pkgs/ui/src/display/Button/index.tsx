import { ReactNode } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
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
  color = 'primary',
  sx,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} color={color} sx={{ ...sx }} {...props}>
      {children}
    </MuiButton>
  );
};
