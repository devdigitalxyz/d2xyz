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
        {/* <Box>
          <LinkButton fullWidth href='/content' title='Content'>
            Content
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/content/portfolio' title='Portfolio'>
            Portfolio
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/gallery' title='Gallery'>
            Gallery
          </LinkButton>
        </Box> */}
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
