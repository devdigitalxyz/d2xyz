import { Box } from '@mui/material';
import { H4, Body1 } from '@d2xyz/ui';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { PageLayout } from '../../components/PageLayout';

export const AboutView = () => {
  return (
    <PageLayout>
      <MetaTags title='About me | Ricardo Mota' />
      <Box>
        <H4 paragraph>About me</H4>
        <Body1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          reiciendis, quae exercitationem earum mollitia pariatur ipsum magni
          adipisci illo expedita ut recusandae labore asperiores magnam facere
          iure excepturi assumenda eveniet.
        </Body1>
      </Box>
    </PageLayout>
  );
};
