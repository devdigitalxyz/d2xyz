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
          <LinkButton fullWidth href='/partners' title='Partners'>
            Partners
          </LinkButton>
        </Box>
      </Box>
    </MenuButton>
  );
};
