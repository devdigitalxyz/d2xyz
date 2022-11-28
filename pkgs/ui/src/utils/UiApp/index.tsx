import type { AppProps, AppType } from 'next/app';
import Script from 'next/script';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/react';
import { createEmotionCache } from 'scripts';
import { UiProvider, MetaTags } from 'ui/src/utils';

const clientSideEmotionCache = createEmotionCache();

interface UiAppProps extends AppProps {
  emotionCache?: EmotionCache;
  GA_MEASUREMENT_ID?: string;
}

export const UiApp: AppType = (props: UiAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    GA_MEASUREMENT_ID,
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any;

  return (
    <CacheProvider value={emotionCache}>
      <MetaTags app />
      <UiProvider>
        {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== '' && (
          <>
            <Script
              id='gtag'
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy='afterInteractive'
              async
            />
            <Script
              id='ga'
              strategy='afterInteractive'
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
      
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
              }}
            />
          </>
        )}
        <AnyComponent {...pageProps} />
      </UiProvider>
    </CacheProvider>
  );
};
