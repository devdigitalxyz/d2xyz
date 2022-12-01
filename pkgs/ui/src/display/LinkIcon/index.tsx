import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import type { LinkProps } from '../Link';
import { Link } from '../Link';
import MuiLinkIcon from '@mui/icons-material/Link';

export interface LinkIconProps
  extends Pick<LinkProps, 'href' | 'external' | 'children' | 'title'> {
  tooltip?: string;
  icon?: React.ReactNode;
}

export const LinkIcon = ({
  tooltip = 'Navigation',
  icon,
  children,
  ...props
}: LinkIconProps) => {
  return (
    <Link {...props}>
      <Tooltip title={tooltip}>
        <IconButton size='small'>
          {icon || children || <MuiLinkIcon />}
        </IconButton>
      </Tooltip>
    </Link>
  );
};
