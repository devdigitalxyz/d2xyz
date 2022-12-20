import { Box } from '@mui/material';
import { MenuIcon, LinkButton } from 'ui';

export const Nav = () => {
  return (
    <MenuIcon sx={{ color: '#fff' }} labels={{ tooltip: 'Navigation' }}>
      <Box>
        <Box>
          <LinkButton fullWidth href='/collections' title='Gallery'>
            Gallery
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/socials' title='Socials'>
            Socials
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/credits' title='Credits'>
            Credits
          </LinkButton>
        </Box>
      </Box>
    </MenuIcon>
  );
};
