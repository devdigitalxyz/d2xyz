import type { AppProps, AppType } from 'next/app';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/react';
import { createEmotionCache } from 'scripts';
import { UiProvider } from 'ui/src/utils';

const clientSideEmotionCache = createEmotionCache();

interface UiAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export const UiApp: AppType = (props: UiAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any;

  return (
    <CacheProvider value={emotionCache}>
      <UiProvider GA_MEASUREMENT_ID=''>
        <AnyComponent {...pageProps} />
      </UiProvider>
    </CacheProvider>
  );
};
