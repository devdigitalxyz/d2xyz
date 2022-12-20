import { Box } from '@mui/material';
import { MenuIcon, LinkButton } from 'ui';

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
          <LinkButton fullWidth href='/collections' title='Gallery'>
            Gallery
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
