import { Box } from '@mui/material';
import { CMS } from 'cms';
import { MetaTags } from 'ui/src/utils';
import { PageLayout } from '../../components/PageLayout';

export const CollectionsView = () => {
  return (
    <PageLayout>
      <MetaTags title='Collections | Dream With Art' />
      <Box>
        <CMS />
      </Box>
    </PageLayout>
  );
};
