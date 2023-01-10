import React, { useMemo } from 'react';
import NextLink from 'next/link';

export interface LinkProps {
  external?: boolean;
  decoration?: boolean;
  href: string;
  title?: string;
  children?: React.ReactNode;
  sx?: React.CSSProperties;
}

export const Link = ({
  children,
  external,
  decoration = false,
  href,
  title = '',
  sx,
}: LinkProps) => {
  const linkProps = useMemo(
    () => (external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    [external],
  );

  const linkDecoration = useMemo(
    () => (!decoration ? { textDecoration: 'none' } : {}),
    [decoration],
  );

  if (external) {
    return (
      <a
        href={href}
        title={title}
        {...linkProps}
        style={{ ...linkDecoration, ...sx }}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      title={title}
      {...linkProps}
      style={{ ...linkDecoration, ...sx }}
      passHref
    >
      {children}
    </NextLink>
  );
};
