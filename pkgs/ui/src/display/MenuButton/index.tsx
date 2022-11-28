import React, { useState, useMemo } from 'react';
import { Box, Menu } from '@mui/material';
import { Button } from 'ui';

export interface MenuButtonLabels {
  btn: string | React.ReactNode;
}

const labelsDefault: MenuButtonLabels = {
  btn: 'Open menu',
};

export interface MenuButtonProps {
  labels?: MenuButtonLabels;
  children?: React.ReactNode;
}

export const MenuButton = ({
  labels = labelsDefault,
  children,
}: MenuButtonProps) => {
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
      <Button onClick={openHandler}>{labels.btn}</Button>
      <Menu anchorEl={anchorMenu} open={openMenu} onClose={closeHandler}>
        <Box>{children}</Box>
      </Menu>
    </Box>
  );
};
