import { Box } from '@mui/material';
import { MenuIcon, LinkButton } from '@d2xyz/ui';

export const Nav = () => {
  return (
    <MenuIcon sx={{ color: '#fff' }} labels={{ tooltip: 'Navigation' }}>
      <Box>
        <Box>
          <LinkButton fullWidth href='/gallery' title='Gallery'>
            Gallery
          </LinkButton>
        </Box>
        <Box>
          <LinkButton
            fullWidth
            external
            href='https://ricardojrmcom.gumroad.com/l/art-commission'
            title='FREE Art'
          >
            FREE Art
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/socials' title='Socials'>
            Socials
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/partners' title='Partners'>
            Partners
          </LinkButton>
        </Box>
      </Box>
    </MenuIcon>
  );
};
