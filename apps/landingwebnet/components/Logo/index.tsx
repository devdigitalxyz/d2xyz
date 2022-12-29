import { Image, LinkButton } from '@d2xyz/ui';

export const Logo = () => (
  <LinkButton href='/' title='landingwebnet'>
    <Image
      responsive
      title='@landingwebnet'
      alt='@landingwebnet'
      src='/static/img/landingwebnet-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
