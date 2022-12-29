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
          <LinkButton fullWidth href='/blog' title='Blog'>
            Blog
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/blog/book-recommendations' title='Books'>
            Books
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/services' title='Services'>
            Services
          </LinkButton>
        </Box>
      </Box>
    </MenuButton>
  );
};
