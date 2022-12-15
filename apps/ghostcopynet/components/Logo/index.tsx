import { Image, LinkButton } from 'ui';

export const Logo = () => (
  <LinkButton href='/' title='ghostcopynet'>
    <Image
      responsive
      alt='@ghostcopynet'
      src='/static/img/ghostcopynet-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
