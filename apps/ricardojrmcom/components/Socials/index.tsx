import { Grid } from '@mui/material';
import { LinkIcon } from 'ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export interface SocialsProps {
  brandName?: string;
  github?: boolean;
  facebook?: boolean;
  twitter?: boolean;
  instagram?: boolean;
  pinterest?: boolean;
  tiktok?: boolean;
  linkedin?: boolean;
}

export const Socials = ({
  brandName = 'devdigitalxyz',
  facebook,
  github,
  instagram,
  pinterest,
  tiktok,
  twitter,
  linkedin,
}: SocialsProps) => (
  <Grid container alignItems='center' spacing={1}>
    {github && (
      <Grid item>
        <LinkIcon
          external
          href={`https://github.com/${brandName}`}
          tooltip='Github'
          title={`${brandName} on GitHub`}
        >
          <GitHubIcon sx={{ color: '#fff', fontSize: '30px' }} />
        </LinkIcon>
      </Grid>
    )}
    {twitter && (
      <Grid item>
        <LinkIcon
          external
          href={`https://twitter.com/${brandName}`}
          tooltip='Twitter'
          title={`${brandName} on Twitter`}
        >
          <TwitterIcon sx={{ color: '#fff', fontSize: '30px' }} />
        </LinkIcon>
      </Grid>
    )}
  </Grid>
);
