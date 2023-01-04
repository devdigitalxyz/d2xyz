import { Box } from '@mui/material';
import { MenuButton, LinkButton } from '@d2xyz/ui';
import MenuIcon from '@mui/icons-material/Menu';

export const Nav = () => {
  return (
    <MenuButton
      sx={{ color: '#fff' }}
      labels={{ btn: 'Menu' }}
      endIcon={<MenuIcon />}
      variant='text'
    >
      <Box>
        <Box>
          <LinkButton
            fullWidth
            href='/content/book-recommendations'
            title='Books'
          >
            Books
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/content' title='Content'>
            Content
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/gallery' title='Gallery'>
            Gallery
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/services' title='Services'>
            Services
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/contacts' title='Contacts'>
            Contacts
          </LinkButton>
        </Box>
      </Box>
    </MenuButton>
  );
};
