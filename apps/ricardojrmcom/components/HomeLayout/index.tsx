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
      bgVideo='static/vid/ricardojrmcom-bg.mp4'
      bgGradient={{
        from: '#000000ea',
        to: '#1d1c1fea',
      }}
      header={
        <Header transparent home={<Logo />}>
          <Nav />
        </Header>
      }
      footer={
        <Footer
          transparent
          copyrightMsg={APP.copyright}
          socials={{
            brandName: APP.brandName,
            github: true,
            twitter: true,
            linkedin: true,
          }}
        />
      }
    >
      {children}
    </Layout>
  );
};
