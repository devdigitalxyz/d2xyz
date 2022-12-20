import { Layout, Header, Footer } from 'ui';
import { APP } from '../../cfg/app';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

export interface HomeLayoutProps {
  children?: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Layout
      bgVideo='static/vid/rjdreamwithart-bg.mp4'
      bgGradient={{
        from: '#2A293Bfa',
        to: '#2A293Bea',
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
            github: false,
            twitter: true,
            linkedin: true,
            linkedinOverride: 'https://www.linkedin.com/company/rjdreamwithart',
          }}
        />
      }
    >
      {children}
    </Layout>
  );
};
