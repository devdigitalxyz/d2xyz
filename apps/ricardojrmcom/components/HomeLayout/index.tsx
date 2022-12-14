import { Layout, Header, Footer } from 'ui';
import { APP } from '../../cfg/app';
import { Logo } from '../Logo';

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
      header={<Header transparent home={<Logo />} />}
      footer={
        <Footer
          transparent
          copyrightMsg={APP.copyright}
          socials={{
            brandName: APP.brandName,
            github: true,
            twitter: true,
          }}
        />
      }
    >
      {children}
    </Layout>
  );
};
