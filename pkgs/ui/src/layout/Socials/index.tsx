import { Grid } from '@mui/material';
import { LinkIcon } from '@d2xyz/ui';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

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
  // tiktok,
  twitter,
  linkedin,
  linkedinOverride,
}: SocialsProps) => (
  <Grid container alignItems='center' justifyContent='center'>
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
    {facebook && (
      <Grid item>
        <LinkIcon
          external
          href={`https://facebook.com/${brandName}`}
          tooltip='Facebook'
          title={`${brandName} on Facebook`}
          noTooltip
        >
          <FacebookIcon sx={{ color: '#fff', fontSize: '42px' }} />
        </LinkIcon>
      </Grid>
    )}
    {instagram && (
      <Grid item>
        <LinkIcon
          external
          href={`https://instagram.com/${brandName}`}
          tooltip='Instagram'
          title={`${brandName} on Instagram`}
          noTooltip
        >
          <InstagramIcon sx={{ color: '#fff', fontSize: '42px' }} />
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
    {pinterest && (
      <Grid item>
        <LinkIcon
          external
          href={`https://pinterest.com/${brandName}`}
          tooltip='Pinterest'
          title={`${brandName} on Pinterest`}
          noTooltip
        >
          <PinterestIcon sx={{ color: '#fff', fontSize: '42px' }} />
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
  </Grid>
);
