import type { AppProps, AppType } from 'next/app';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/react';
import { createEmotionCache } from 'scripts';
import { UiProvider } from 'ui/src/utils';
import { defaultTheme } from '../cfg/theme';

const clientSideEmotionCache = createEmotionCache();

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_RICARDOJRMCOM || '';

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
        THEME={defaultTheme}
        META={{
          title: 'Ricardo Mota',
          description: 'Building my myself.',
          author: 'Ricardo Mota',
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
