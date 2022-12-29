import { Box } from '@mui/material';
import { MenuButton, LinkButton } from '@d2xyz/ui';
import MenuIcon from '@mui/icons-material/Menu';

export const Nav = () => {
  return (
    <MenuButton
      sx={{ color: '#fff' }}
      labels={{ btn: 'Menu' }}
      endIcon={<MenuIcon />}
    >
      <Box>
        {/* <Box>
          <LinkButton fullWidth href='/blog'>
            Blog
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/books'>
            Books
          </LinkButton>
        </Box> */}
        <Box>
          <LinkButton fullWidth href='/services' title='Services'>
            Services
          </LinkButton>
        </Box>
        {/* <Box>
          <LinkButton fullWidth href='/about'>
            About me
          </LinkButton>
        </Box> */}
      </Box>
    </MenuButton>
  );
};
