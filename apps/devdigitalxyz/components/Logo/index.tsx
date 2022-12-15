import { Image, LinkButton } from 'ui';

export const Logo = () => (
  <LinkButton href='/' title='devdigitalxyz'>
    <Image
      responsive
      alt='D2XYZ'
      src='/static/img/devdigitalxyz-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
