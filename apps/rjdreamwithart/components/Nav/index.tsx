import { Box } from '@mui/material';
import { MenuButton, LinkButton } from '@d2xyz/ui';
import MenuIcon from '@mui/icons-material/Menu';

export const Nav = () => {
  return (
    <MenuButton
      variant='text'
      labels={{ btn: 'Menu' }}
      sx={{ color: '#fff' }}
      endIcon={<MenuIcon />}
    >
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
    </MenuButton>
  );
};
