import React from 'react';
import type { LinkProps } from '../Link';
import { Link } from '../Link';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

export interface LinkButtonProps
  extends Pick<
      LinkProps,
      'href' | 'external' | 'children' | 'sx' | 'title' | 'className'
    >,
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
