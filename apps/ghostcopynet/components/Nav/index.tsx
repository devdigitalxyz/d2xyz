import { Box } from '@mui/material';
import { MenuIcon, LinkButton } from '@d2xyz/ui';

export const Nav = () => {
  return (
    <MenuIcon sx={{ color: '#fff' }} labels={{ tooltip: 'Navigation' }}>
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
    </MenuIcon>
  );
};
