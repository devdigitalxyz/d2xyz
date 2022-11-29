import React, { type FC } from 'react';
import { useTheme, Box } from '@mui/material';

export interface TEMPLATELabelsProps {
  text?: string;
}

const labelsDefault: TEMPLATELabelsProps = {
  text: 'Boop',
};

export interface TEMPLATEProps {
  labels?: TEMPLATELabelsProps;
}

export const TEMPLATE: FC<TEMPLATEProps> = ({ labels = labelsDefault }) => {
  const theme = useTheme();

  return (
    <Box
      className='text-white'
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      {labels.text}
    </Box>
  );
};
