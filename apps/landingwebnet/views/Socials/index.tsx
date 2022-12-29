import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1, type SocialsProps } from '@d2xyz/ui';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { HomeLayout } from '../../components/HomeLayout';

export const SocialsView = ({
  brandName,
  facebook,
  instagram,
  pinterest,
  // tiktok,
  github,
  twitter,
  linkedin,
  linkedinOverride,
}: SocialsProps) => {
  return (
    <HomeLayout>
      <MetaTags title='Socials | Landing Web' />
      <Grid
        container
        sx={{
          minHeight: '100vh',
          color: '#fff',
          paddingTop: '81px',
          paddingBottom: '120px',
        }}
        alignItems='center'
        justifyContent='center'
      >
        <Grid item>
          <Box textAlign='center'>
            <LinkButton href='/' title='Dream With Art'>
              <Image
                src='static/img/landingwebnet-logo-alpha.png'
                alt='landingwebnet'
                title='landingwebnet'
                responsive
                sx={{
                  maxWidth: '450px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3} mt={1}>
            <Subtitle1 paragraph>Socials</Subtitle1>
          </Box>
          {twitter && (
            <Box textAlign='center' mt={1.5} mb={1.5}>
              <LinkButton
                color='secondary'
                variant='contained'
                fullWidth
                external
                href={`https://twitter.com/${brandName}`}
                title={`${brandName} on Twitter`}
              >
                Twitter
              </LinkButton>
            </Box>
          )}
          {facebook && (
            <Box textAlign='center' mt={1.5} mb={1.5}>
              <LinkButton
                color='secondary'
                variant='contained'
                fullWidth
                external
                href={`https://facebook.com/${brandName}`}
                title={`${brandName} on Facebook`}
              >
                Facebook
              </LinkButton>
            </Box>
          )}
          {instagram && (
            <Box textAlign='center' mt={1.5} mb={1.5}>
              <LinkButton
                color='secondary'
                variant='contained'
                fullWidth
                external
                href={`https://instagram.com/${brandName}`}
                title={`${brandName} on Instagram`}
              >
                Instagram
              </LinkButton>
            </Box>
          )}
          {linkedin && (
            <Box textAlign='center' mt={1.5} mb={1.5}>
              <LinkButton
                color='secondary'
                variant='contained'
                fullWidth
                external
                href={
                  linkedinOverride || `https://linkedin.com/in/${brandName}`
                }
                title={`${brandName} on LinkedIn`}
              >
                LinkedIn
              </LinkButton>
            </Box>
          )}
          {github && (
            <Box textAlign='center' mt={1.5} mb={1.5}>
              <LinkButton
                color='secondary'
                variant='contained'
                fullWidth
                external
                href={`https://github.com/${brandName}`}
                title={`${brandName} on Github`}
              >
                Github
              </LinkButton>
            </Box>
          )}
          {pinterest && (
            <Box textAlign='center' mt={1.5} mb={1.5}>
              <LinkButton
                color='secondary'
                variant='contained'
                fullWidth
                external
                href={`https://pinterest.com/${brandName}`}
                title={`${brandName} on Pinterest`}
              >
                Pinterest
              </LinkButton>
            </Box>
          )}
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
