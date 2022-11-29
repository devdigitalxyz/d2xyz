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
import { MetaTags } from '../MetaTags';
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
  GA_MEASUREMENT_ID?: string;
}

export const UiProvider = ({
  children,
  GA_MEASUREMENT_ID,
}: UiProviderProps) => {
  const [theme, themeSet] = useState<UiContextType['theme']>(init.theme);
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
        },
      }));
    } else {
      themeSet((t) => ({
        ...t,
        palette: {
          mode: 'light',
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
        <MetaTags app />
        <>{children}</>
      </ThemeProvider>
    </UiContext.Provider>
  );
};
