import { Box } from '@mui/material';
import { CMSCtrl } from './ctrl';
import { CMSContent } from './content';

export const CMS = () => {
  return (
    <Box>
      <CMSCtrl />
      <CMSContent />
    </Box>
  );
};
