import { Box } from '@mui/material';
import { CMS } from '@d2xyz/cms';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { PageLayout } from '../../components/PageLayout';

export const GalleryView = () => {
  return (
    <PageLayout>
      <MetaTags title='Gallery | Dream With Art' />
      <Box>
        <CMS />
      </Box>
    </PageLayout>
  );
};
