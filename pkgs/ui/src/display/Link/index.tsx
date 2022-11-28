import React, { useMemo } from 'react';
import NextLink from 'next/link';
import type {
  TypographyProps,
  LinkProps as MuiLinkProps} from '@mui/material';
import {
  Typography,
  Link as MuiLink
} from '@mui/material';

export interface LinkProps
  extends TypographyProps,
    Pick<MuiLinkProps, 'title'> {
  external?: boolean;
  href: string;
}

export const Link = ({
  children,
  external,
  href,
  sx,
  variant = 'button',
  title = 'Link',
  ...propsTypo
}: LinkProps) => {
  const linkProps = useMemo(
    () => (external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    [external],
  );

  const linkComponent = (
    <MuiLink href={href} title={title} {...linkProps} sx={{ ...sx }}>
      {children}
    </MuiLink>
  );
  if (external) {
    return (
      <Typography variant={variant} {...propsTypo}>
        {linkComponent}
      </Typography>
    );
  }
  return (
    <Typography variant={variant} {...propsTypo}>
      <NextLink href={href} passHref>
        {linkComponent}
      </NextLink>
    </Typography>
  );
};
