import { Grid } from '@mui/material';
import { LinkIcon } from 'ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export interface SocialsProps {
  brandName?: string;
  github?: boolean;
  facebook?: boolean;
  twitter?: boolean;
  instagram?: boolean;
  pinterest?: boolean;
  tiktok?: boolean;
  linkedin?: boolean;
  linkedinOverride?: string;
}

export const Socials = ({
  brandName,
  facebook,
  github,
  instagram,
  pinterest,
  tiktok,
  twitter,
  linkedin,
  linkedinOverride,
}: SocialsProps) => (
  <Grid container alignItems='center' justifyContent='center' spacing={1}>
    {twitter && (
      <Grid item>
        <LinkIcon
          external
          href={`https://twitter.com/${brandName}`}
          tooltip='Twitter'
          title={`${brandName} on Twitter`}
          noTooltip
        >
          <TwitterIcon sx={{ color: '#fff', fontSize: '42px' }} />
        </LinkIcon>
      </Grid>
    )}
    {github && (
      <Grid item>
        <LinkIcon
          external
          href={`https://github.com/${brandName}`}
          tooltip='GitHub'
          title={`${brandName} on GitHub`}
          noTooltip
        >
          <GitHubIcon sx={{ color: '#fff', fontSize: '42px' }} />
        </LinkIcon>
      </Grid>
    )}
    {linkedin && (
      <Grid item>
        <LinkIcon
          external
          href={linkedinOverride || `https://linkedin.com/in/${brandName}`}
          tooltip='LinkedIn'
          title={`${brandName} on LinkedIn`}
          noTooltip
        >
          <LinkedInIcon sx={{ color: '#fff', fontSize: '42px' }} />
        </LinkIcon>
      </Grid>
    )}
  </Grid>
);
