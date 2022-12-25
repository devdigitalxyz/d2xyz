/* eslint-disable turbo/no-undeclared-env-vars */
// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('../../pkgs/env/server.mjs'));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  transpilePackages: [
    '@d2xyz/cms',
    '@d2xyz/hooks',
    '@d2xyz/scripts',
    '@d2xyz/ui',
  ],
};
export default config;
