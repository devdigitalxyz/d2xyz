import { Image, LinkButton } from '@d2xyz/ui';

export const Logo = () => (
  <LinkButton href='/' title='Ricardo Mota'>
    <Image
      responsive
      title='Ricardo Mota'
      alt='Ricardo Mota'
      src='/static/img/ricardojrmcom-logo-alpha.png'
      sx={{ maxHeight: '39px' }}
    />
  </LinkButton>
);
