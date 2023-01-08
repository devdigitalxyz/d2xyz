import type { AppProps, AppType } from 'next/app';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@d2xyz/scripts';
import { UiProvider } from '@d2xyz/ui/src/utils';
import { CMSConfigProvider } from '@d2xyz/cms';
import { theme } from '../cfg/theme';
import { config } from '../cfg/sanity';

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
          title: 'Dream With Art',
          description: '🎨 Unlimited AI Artworks',
          author: 'Dream With Art (@rjdreamwithart)',
          favicon: '/static/img/rjdreamwithart-logo.png',
          ogimg: '/static/img/rjdreamwithart-logo.png',
          keywords:
            'art, concept art, character design, ai art, midjourney, stable diffusion',
        }}
      >
        <CMSConfigProvider cfg={config}>
          <AnyComponent {...pageProps} />
        </CMSConfigProvider>
      </UiProvider>
    </CacheProvider>
  );
};

export default UiApp;
