import { Layout, Header, Footer } from 'ui';
import { Logo } from '../Logo';
import { Widgets } from '../Widgets';

export interface HomeLayoutProps {
  children?: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Layout
      bgVideo='static/vid/devdigitalxyz-bg.mp4'
      bgGradient={{
        from: '#000000ea',
        to: '#1d1c1fea',
      }}
      header={
        <Header transparent home={<Logo />}>
          <Widgets />
        </Header>
      }
      footer={
        <Footer transparent copyrightMsg='Copyright © devdigital.xyz 2022' />
      }
    >
      {children}
    </Layout>
  );
};
