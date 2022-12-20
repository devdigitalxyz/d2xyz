import type { ReactNode } from 'react';
import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import Script from 'next/script';
import type { ThemeOptions, Theme } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { MetaTags, type MetaTagsProps } from '../MetaTags';
import { defaultTheme } from '../../theme';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export interface UiContextType {
  theme?: ThemeOptions;
  dark?: boolean;
  toggleDark?: () => void;
}

const init: UiContextType = {
  theme: defaultTheme,
  dark: false,
  toggleDark: () => undefined,
};

export const UiContext = createContext<UiContextType>(init);

export interface UiProviderProps {
  children: ReactNode;
  MSC_MEASUREMENT_ID?: string;
  GA_MEASUREMENT_ID?: string;
  THEME?: ThemeOptions;
  META?: MetaTagsProps;
}

export const UiProvider = ({
  children,
  MSC_MEASUREMENT_ID,
  GA_MEASUREMENT_ID,
  THEME,
  META,
}: UiProviderProps) => {
  const [theme, themeSet] = useState<UiContextType['theme']>(
    THEME || init.theme,
  );
  const [dark, darkSet] = useState<UiContextType['dark']>(init.dark);

  const toggleDark = useCallback(() => {
    darkSet((prev) => !prev);
  }, []);

  // handle dark
  useEffect(() => {
    if (dark) {
      themeSet((t) => ({
        ...t,
        palette: {
          mode: 'dark',
          ...t?.palette,
        },
      }));
    } else {
      themeSet((t) => ({
        ...t,
        palette: {
          mode: 'light',
          ...t?.palette,
        },
      }));
    }
  }, [dark, themeSet]);

  // build theme
  const themeProvided: Theme = useMemo(() => createTheme(theme), [theme]);

  // build context
  const ctx = useMemo(
    () => ({
      theme,
      dark,
      toggleDark,
    }),
    [theme, dark, toggleDark],
  );

  return (
    <UiContext.Provider value={ctx}>
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
          <Script
            id='msc'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${MSC_MEASUREMENT_ID}");
              `,
            }}
          />
        </>
      )}
      <ThemeProvider theme={themeProvided}>
        <CssBaseline />
        <ToastContainer
          position='bottom-left'
          autoClose={2400}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          style={{ fontSize: '14px' }}
        />
        <MetaTags app {...META} />
        <>{children}</>
      </ThemeProvider>
    </UiContext.Provider>
  );
};
