import Head from 'next/head';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from 'scripts';
import { UiProvider } from 'ui/src/utils/UiProvider';

const clientSideEmotionCache = createEmotionCache();

interface UiAppProps extends AppProps {
  emotionCache?: EmotionCache;
  GA_MEASUREMENT_ID?: string;
}

export const UiApp = (props: UiAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    GA_MEASUREMENT_ID,
  } = props;
  const AnyComponent = Component as any;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
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
