import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { PORTFOLIO_PROFILE, PORTFOLIO_SOCIALS, PORTFOLIO_CONTACT_ITEMS } from 'src/_mock/_portfolio';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Navigation',
    children: [
      { name: 'Home', href: '/' },
      { name: 'About', href: paths.about },
      { name: 'Projects', href: paths.projects },
      { name: 'Contact', href: paths.contact },
    ],
  },
  {
    headline: 'Connect',
    children: PORTFOLIO_SOCIALS.map((social) => ({
      name: social.label,
      href: social.path,
    })),
  },
  {
    headline: 'Contact',
    children: PORTFOLIO_CONTACT_ITEMS.map((item) => ({
      name: item.value,
      href: item.href,
    })),
  },
];

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.vars.palette.background.default,
}));

export function Footer({ sx, layoutQuery = 'md', ...other }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Divider />

      <Container
        sx={(theme) => ({
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        })}
      >
        <Logo />

        <Grid
          container
          sx={[
            (theme) => ({
              mt: 3,
              justifyContent: 'center',
              [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
            }),
          ]}
        >
          <Grid size={{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={(theme) => ({
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              })}
            >
              {PORTFOLIO_PROFILE.tagline}
            </Typography>

            <Box
              sx={(theme) => ({
                mt: 3,
                mb: 5,
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              })}
            >
              {PORTFOLIO_SOCIALS.map((social) => (
                <IconButton key={social.label} component="a" href={social.path} target="_blank" rel="noopener noreferrer">
                  <Iconify icon={social.icon} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, [layoutQuery]: 6 }}>
            <Box
              sx={(theme) => ({
                gap: 5,
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              })}
            >
              {LINKS.map((list) => (
                <Box
                  key={list.headline}
                  sx={(theme) => ({
                    gap: 2,
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  })}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => {
                    const isExternal =
                      link.href.startsWith('http') ||
                      link.href.startsWith('mailto:') ||
                      link.href.startsWith('tel:');

                    return (
                      <Link
                        key={link.name}
                        component={isExternal ? 'a' : RouterLink}
                        href={link.href}
                        color="inherit"
                        variant="body2"
                        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © {new Date().getFullYear()} {PORTFOLIO_PROFILE.name}. All rights reserved.
        </Typography>
      </Container>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <FooterRoot
      sx={[
        {
          py: 5,
          textAlign: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: 'caption' }}>
          © {new Date().getFullYear()} {PORTFOLIO_PROFILE.name}. All rights reserved.
        </Box>
      </Container>
    </FooterRoot>
  );
}
