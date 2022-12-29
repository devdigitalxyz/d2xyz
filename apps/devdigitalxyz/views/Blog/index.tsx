import { Box } from '@mui/material';
import { CMS } from '@d2xyz/cms';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { PageLayout } from '../../components/PageLayout';

export const BlogView = () => {
  return (
    <PageLayout>
      <MetaTags title='Blog | D2XYZ' />
      <Box>
        <CMS />
      </Box>
    </PageLayout>
  );
};
