import React, { useMemo } from 'react';
import NextLink from 'next/link';

export interface LinkProps {
  external?: boolean;
  decoration?: boolean;
  href: string;
  title?: string;
  children?: React.ReactNode;
}

export const Link = ({
  children,
  external,
  decoration = false,
  href,
  title = 'Link',
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
      <a href={href} title={title} {...linkProps} style={{ ...linkDecoration }}>
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      title={title}
      {...linkProps}
      style={{ ...linkDecoration }}
      passHref
    >
      {children}
    </NextLink>
  );
};

// import React, { useMemo } from 'react';
// import NextLink from 'next/link';
// import type {
//   TypographyProps,
//   LinkProps as MuiLinkProps} from '@mui/material';
// import {
//   Typography,
//   Link as MuiLink
// } from '@mui/material';

// export interface LinkProps
//   extends TypographyProps,
//     Pick<MuiLinkProps, 'title'> {
//   external?: boolean;
//   href: string;
// }

// export const Link = ({
//   children,
//   external,
//   href,
//   sx,
//   variant = 'button',
//   title = 'Link',
//   ...propsTypo
// }: LinkProps) => {
//   const linkProps = useMemo(
//     () => (external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
//     [external],
//   );

//   const linkComponent = (
//     <MuiLink href={href} title={title} {...linkProps} sx={{ ...sx }}>
//       {children}
//     </MuiLink>
//   );
//   if (external) {
//     return (
//       <Typography variant={variant} {...propsTypo}>
//         {linkComponent}
//       </Typography>
//     );
//   }
//   return (
//     <Typography variant={variant} {...propsTypo}>
//       <NextLink href={href} passHref>
//         {linkComponent}
//       </NextLink>
//     </Typography>
//   );
// };
