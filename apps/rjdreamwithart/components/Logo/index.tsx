import { Image, LinkButton } from '@d2xyz/ui';

export const Logo = () => (
  <LinkButton href='/' title='Dream With Art'>
    <Image
      responsive
      title='Dream With Art'
      alt='Dream With Art'
      src='/static/img/rjdreamwithart-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
