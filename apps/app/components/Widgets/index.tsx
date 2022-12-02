import { Grid } from '@mui/material';
import { LinkIcon } from 'ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Widgets = () => (
  <Grid container alignItems='center' spacing={1}>
    <Grid item>
      <LinkIcon
        external
        href='https://github.com/devdigitalxyz'
        tooltip='Github'
        title='devdigitalxyz'
      >
        <GitHubIcon sx={{ color: '#fff', fontSize: '27px' }} />
      </LinkIcon>
    </Grid>
    <Grid item>
      <LinkIcon
        external
        href='https://twitter.com/devdigitalxyz'
        tooltip='Twitter'
        title='devdigitalxyz'
      >
        <TwitterIcon sx={{ color: '#fff', fontSize: '27px' }} />
      </LinkIcon>
    </Grid>
  </Grid>
);
