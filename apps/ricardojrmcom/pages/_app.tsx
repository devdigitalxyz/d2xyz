import type { AppProps, AppType } from 'next/app';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@d2xyz/scripts';
import { UiProvider } from '@d2xyz/ui/src/utils';
import { theme } from '../cfg/theme';

const clientSideEmotionCache = createEmotionCache();

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA || '';
const MSC_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MSC || '';

interface UiAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const UiApp: AppType = (props: UiAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any;

  return (
    <CacheProvider value={emotionCache}>
      <UiProvider
        GA_MEASUREMENT_ID={GA_MEASUREMENT_ID}
        MSC_MEASUREMENT_ID={MSC_MEASUREMENT_ID}
        THEME={theme}
        META={{
          title: 'Ricardo Mota',
          description:
            'Building a portfolio of one-person businesses by myself.',
          author: 'Ricardo Mota (@ricardojrmcom)',
          favicon: '/static/img/ricardojrmcom-logo.png',
          ogimg: '/static/img/ricardojrmcom-logo.png',
          keywords: 'business',
        }}
      >
        <AnyComponent {...pageProps} />
      </UiProvider>
    </CacheProvider>
  );
};

export default UiApp;
