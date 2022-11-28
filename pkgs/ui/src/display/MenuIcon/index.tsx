import React, { useState, useMemo } from 'react';
import { Box, IconButton, IconButtonProps, Tooltip, Menu } from '@mui/material';
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
}

export const MenuIcon = ({
  labels = labelsDefault,
  children,
  icon,
  sx,
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
      <Tooltip title={labels.tooltip}>
        <IconButton size='small' onClick={openHandler} sx={sx}>
          {icon || <MuiMenuIcon />}
        </IconButton>
      </Tooltip>
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
