import type { AppProps, AppType } from 'next/app';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/react';
import { createEmotionCache } from 'scripts';
import { UiProvider } from 'ui/src/utils';
import { theme } from '../cfg/theme';

const clientSideEmotionCache = createEmotionCache();

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_RICARDOJRMCOM || '';
const MSC_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MSC_RICARDOJRMCOM || '';

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
          title: 'Dream With Art',
          description: 'The Best AI Artwork.',
          author: 'Dream With Art (@rjdreamwithart)',
          favicon: '/static/img/rjdreamwithart-logo.png',
          ogimg: '/static/img/rjdreamwithart-logo.png',
          keywords: 'art, concept art, character design',
        }}
      >
        <AnyComponent {...pageProps} />
      </UiProvider>
    </CacheProvider>
  );
};

export default UiApp;
