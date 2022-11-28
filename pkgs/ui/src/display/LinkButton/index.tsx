import React from 'react';
import { Link, LinkProps } from '../Link';
import { Button, ButtonProps } from '../Button';

export interface LinkButtonProps
  extends Pick<LinkProps, 'href' | 'external' | 'children' | 'sx' | 'title'>,
    Pick<ButtonProps, 'variant'> {}

export const LinkButton = ({
  children = 'Boop',
  variant = 'text',
  sx,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      {...props}
      sx={{ textDecoration: 'none', ...sx }}
      onClick={(e) => e.stopPropagation()}
    >
      <Button variant={variant}>{children}</Button>
    </Link>
  );
};
