import React, { type FC, type ReactNode } from 'react';
import { useTheme, Box } from '@mui/material';
import { hexToRgb } from 'scripts';
import { Header } from '../Header';
import { Footer } from '../Footer';

export interface LayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  bgVideo?: string;
  bgAlpha?: string;
  bgGradient?: {
    from: string;
    to: string;
  };
}

export const Layout: FC<LayoutProps> = ({
  header = <Header />,
  footer = <Footer />,
  children,
  bgVideo,
  bgAlpha,
  bgGradient,
}) => {
  const theme = useTheme();
  const { r, g, b } = hexToRgb(bgAlpha || theme.palette.primary.main);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {bgVideo && (
        <Box
          sx={{
            minHeight: '100%',
            minWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -50,
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              overflow: 'none',
              minHeight: '100%',
              minWidth: '100%',
              position: 'fixed',
              top: 0,
              left: -0,
            }}
          >
            <source src={bgVideo} />
          </video>
        </Box>
      )}

      {bgAlpha && (
        <Box
          sx={{
            minHeight: '100%',
            minWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -25,
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.81)`,
          }}
        ></Box>
      )}

      {bgGradient && (
        <Box
          sx={{
            minHeight: '100%',
            minWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -25,
            backgroundImage: `linear-gradient(to bottom right, ${bgGradient.from}, ${bgGradient.to})`,
          }}
        ></Box>
      )}

      {header && (
        <Box sx={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
          {header || <Header />}
        </Box>
      )}

      {children && (
        <Box sx={{ paddingTop: '81px', paddingBottom: '120px' }}>
          {children}
        </Box>
      )}

      {footer && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
          }}
        >
          {footer || <Footer />}
        </Box>
      )}
    </Box>
  );
};
