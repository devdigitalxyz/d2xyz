import { Image, LinkButton } from 'ui';

export const Logo = () => (
  <LinkButton href='/' title='D2XYZ'>
    <Image
      responsive
      title='D2XYZ'
      alt='D2XYZ'
      src='/static/img/devdigitalxyz-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
