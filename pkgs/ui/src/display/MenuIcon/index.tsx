import React, { useState, useMemo } from 'react';
import type { IconButtonProps } from '@mui/material';
import { Box, IconButton, Tooltip, Menu } from '@mui/material';
import MuiMenuIcon from '@mui/icons-material/Menu';

export interface MenuIconLabels {
  tooltip: string;
}

const labelsDefault: MenuIconLabels = {
  tooltip: 'Open menu',
};

export interface MenuIconProps {
  labels?: MenuIconLabels;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  sx?: IconButtonProps['sx'];
  tooltip?: boolean;
}

export const MenuIcon = ({
  labels = labelsDefault,
  children,
  icon,
  sx,
  tooltip,
}: MenuIconProps) => {
  const [anchorMenu, anchorMenuSet] = useState<null | HTMLElement>(null);
  const openMenu = useMemo(() => Boolean(anchorMenu), [anchorMenu]);
  const openHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    anchorMenuSet(event.currentTarget);
  };
  const closeHandler = () => {
    anchorMenuSet(null);
  };

  return (
    <Box display='inline-block'>
      {tooltip ? (
        <Tooltip title={labels.tooltip}>
          <IconButton size='small' onClick={openHandler} sx={sx}>
            {icon || <MuiMenuIcon />}
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton size='small' onClick={openHandler} sx={sx}>
          {icon || <MuiMenuIcon />}
        </IconButton>
      )}
      <Menu
        anchorEl={anchorMenu}
        open={openMenu}
        onClose={closeHandler}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box>{children}</Box>
      </Menu>
    </Box>
  );
};
