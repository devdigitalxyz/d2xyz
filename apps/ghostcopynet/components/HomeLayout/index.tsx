import { Layout, Header, Footer } from '@d2xyz/ui';
import { APP } from '../../cfg/app';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

export interface HomeLayoutProps {
  children?: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Layout
      bgVideo='static/vid/ghostcopynet-bg.mp4'
      bgGradient={{
        from: '#000000fa',
        to: '#1d1c1fef',
      }}
      header={
        <Header transparent home={<Logo />}>
          {<Nav />}
        </Header>
      }
      footer={<Footer transparent copyrightMsg={APP.copyright} />}
    >
      {children}
    </Layout>
  );
};
