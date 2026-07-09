import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';
import { PORTFOLIO_CONTACT_ITEMS } from 'src/_mock/_portfolio';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function ContactHero({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/images/contact/hero.webp)`,
            ],
          }),
          overflow: 'hidden',
          height: { md: 560 },
          position: 'relative',
          py: { xs: 10, md: 0 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimateText
            component="h1"
            variant="h1"
            textContent={['Get in', 'touch']}
            variants={varFade('inUp', { distance: 24 })}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          <Box
            component="ul"
            sx={{
              mt: 5,
              display: 'grid',
              color: 'common.white',
              rowGap: { xs: 5, md: 0 },
              columnGap: { xs: 2, md: 5 },
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            }}
          >
            {PORTFOLIO_CONTACT_ITEMS.map((contact) => (
              <li key={contact.label}>
                <m.div variants={varFade('inUp', { distance: 24 })}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {contact.label}
                  </Typography>
                </m.div>

                <m.div variants={varFade('inUp', { distance: 24 })}>
                  <Link
                    href={contact.href}
                    color="inherit"
                    underline="hover"
                    target={contact.label === 'Website' || contact.label === 'Address' ? '_blank' : undefined}
                    rel={
                      contact.label === 'Website' || contact.label === 'Address'
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    sx={{ opacity: 0.8, typography: 'body2', display: 'inline-block' }}
                  >
                    {contact.value}
                  </Link>
                </m.div>
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
