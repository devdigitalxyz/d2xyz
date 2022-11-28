import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import type { LinkProps } from '../Link';
import { Link } from '../Link';
import MuiLinkIcon from '@mui/icons-material/Link';

export interface LinkIconProps
  extends Pick<LinkProps, 'href' | 'external' | 'children' | 'sx' | 'title'> {
  tooltip?: string;
  icon?: React.ReactNode;
}

export const LinkIcon = ({
  tooltip = 'Navigation',
  icon,
  sx,
  ...props
}: LinkIconProps) => {
  return (
    <Link
      {...props}
      sx={{ textDecoration: 'none', ...sx }}
      onClick={(e) => e.stopPropagation()}
    >
      <Tooltip title={tooltip}>
        <IconButton size='small'>{icon || <MuiLinkIcon />}</IconButton>
      </Tooltip>
    </Link>
  );
};
