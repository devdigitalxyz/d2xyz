import { Image, LinkButton } from 'ui';

export const Logo = () => (
  <LinkButton href='/' title='Ricardo Mota'>
    <Image
      responsive
      title='Ricardo Mota'
      alt='Ricardo Mota'
      src='/static/img/rjdreamwithart-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
