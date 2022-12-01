import Head from 'next/head';

export type MetaTagsProps = {
  title?: string;
  description?: string;
  author?: string;
  favicon?: string;
  ogimg?: string;
  keywords?: string;
  app?: boolean;
};

export const MetaTags = ({
  title = 'D2XYZ',
  description = 'Fulfilling Web Development and Frontend Engineering for digital products',
  favicon = '/static/img/devdigital-logo.png',
  ogimg = '/static/img/devdigital-ogimg.png',
  author = 'author',
  keywords = 'keywords',
  app,
}: MetaTagsProps) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {title && <meta property='og:title' content={title} />}

      {description && <meta property='og:description' content={description} />}
      {description && <meta name='description' content={description} />}

      {ogimg && <meta property='og:image' content={ogimg} />}

      {author && <meta name='author' content={author} />}

      {keywords && <meta name='keywords' content={keywords} />}

      {favicon && <link rel='icon' href={favicon} />}

      {app && (
        <>
          <meta name='viewport' content='initial-scale=1, width=device-width' />

          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

          <meta charSet='utf-8' />

          {/* <meta name='theme-color' content='#000000' />

          <link rel='manifest' href='/manifest.json' />

          <link rel='apple-touch-icon' href='/logo192.png' />

          <link rel='shortcut icon' href='/favicon.ico' /> */}

          <link rel='preconnect' href='https://fonts.googleapis.com' />
        </>
      )}
    </Head>
  );
};
