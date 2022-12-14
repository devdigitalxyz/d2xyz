import { Image, LinkButton } from 'ui';

export const Logo = () => (
  <LinkButton href='/' title='ricardojrmcom'>
    <Image
      responsive
      alt='Logo'
      src='/static/img/ricardojrmcom-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
