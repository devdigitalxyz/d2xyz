import type { ReactNode } from 'react';
import React from 'react';
import { Box, Grid, IconButton, Tooltip, useTheme } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export interface ClipboardLabels {
  toast: string;
  tooltip: string;
}

const labelsDefault: ClipboardLabels = {
  toast: 'Copied to clipboard',
  tooltip: 'Copy to clipboard',
};

export interface ClipboardProps {
  children?: ReactNode;
  value: string;
  labels?: ClipboardLabels;
}

export const Clipboard = ({
  children,
  value,
  labels = labelsDefault,
}: ClipboardProps) => {
  const { typography } = useTheme();

  return (
    <Box display='inline-block'>
      <Grid container alignItems='center' spacing={1}>
        <Grid item>{children}</Grid>
        <Grid item>
          <Tooltip title={labels.tooltip}>
            <Box>
              <CopyToClipboard text={value}>
                <IconButton
                  size='small'
                  onClick={(e) => {
                    toast.info(labels.toast);
                    e.stopPropagation();
                  }}
                >
                  <ContentCopyIcon
                    sx={{
                      fontSize: typography.body1.fontSize,
                      opacity: '0.45',
                    }}
                  />
                </IconButton>
              </CopyToClipboard>
            </Box>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};
