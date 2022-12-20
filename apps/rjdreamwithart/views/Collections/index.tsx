import { Box } from '@mui/material';
import { ContentProvider, CMS } from 'cms';
import { MetaTags } from 'ui/src/utils';
import { PageLayout } from '../../components/PageLayout';

export const CollectionsView = () => {
  return (
    <ContentProvider>
      <PageLayout>
        <MetaTags title='Collections me | Dream With Art' />
        <Box>
          <CMS />
        </Box>
      </PageLayout>
    </ContentProvider>
  );
};
