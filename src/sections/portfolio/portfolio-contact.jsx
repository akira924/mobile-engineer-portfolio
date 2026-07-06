import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';
import { PORTFOLIO_PROFILE } from 'src/_mock/_portfolio';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { FloatLine, FloatPlusIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

export function PortfolioContact({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ position: 'relative', pb: 10 }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        <FloatPlusIcon sx={{ left: 72, top: '50%', mt: -1 }} />
        <FloatLine vertical sx={{ top: 0, left: 80, height: 'calc(50% + 64px)' }} />
        <FloatLine sx={{ top: '50%', left: 0 }} />

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Box
            sx={(theme) => ({
              ...theme.mixins.bgGradient({
                images: [
                  `linear-gradient(0deg, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.04)} 1px, transparent 1px)`,
                  `linear-gradient(90deg, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.04)} 1px, transparent 1px)`,
                ],
                sizes: ['36px 36px'],
                repeats: ['repeat'],
              }),
              py: 8,
              px: 5,
              spacing: 5,
              borderRadius: 3,
              display: 'flex',
              overflow: 'hidden',
              bgcolor: 'grey.900',
              position: 'relative',
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'left' },
              flexDirection: { xs: 'column', md: 'row' },
              border: `solid 1px ${theme.vars.palette.grey[800]}`,
            })}
          >
            <Box
              component={m.img}
              variants={varFade('inLeft', { distance: 24 })}
              alt="Contact"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-receipt.webp`}
              sx={{
                width: { xs: 240, md: 320 },
                flexShrink: 0,
                filter: 'grayscale(1) opacity(0.8)',
              }}
            />

            <Stack spacing={3} sx={{ zIndex: 9, flexGrow: 1, pl: { md: 5 } }}>
              <Box
                component={m.h2}
                variants={varFade('inDown', { distance: 24 })}
                sx={{
                  m: 0,
                  color: 'common.white',
                  typography: { xs: 'h4', md: 'h3' },
                  fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                }}
              >
                Let&apos;s build your next app
              </Box>

              <Box
                component={m.p}
                variants={varFade('inDown', { distance: 24 })}
                sx={{ m: 0, color: 'grey.500', typography: 'body1' }}
              >
                {PORTFOLIO_PROFILE.availability}. Reach out to discuss your mobile product, timeline,
                and how I can help.
              </Box>

              <Stack
                component={m.div}
                variants={varFade('inDown', { distance: 24 })}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ pt: 1 }}
              >
                <Button
                  component={RouterLink}
                  href={paths.contact}
                  size="large"
                  variant="contained"
                  color="primary"
                  startIcon={<Iconify icon="solar:letter-bold" />}
                >
                  Contact me
                </Button>

                <Button
                  component="a"
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  size="large"
                  variant="outlined"
                  sx={{ color: 'common.white', borderColor: 'grey.700' }}
                  startIcon={<Iconify icon="solar:download-bold" />}
                >
                  Download CV
                </Button>
              </Stack>
            </Stack>

            <Box
              sx={{
                top: 0,
                right: 0,
                zIndex: 8,
                width: 1,
                height: 1,
                position: 'absolute',
                background: (theme) =>
                  `radial-gradient(farthest-side at top right, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}, transparent)`,
              }}
            />
          </Box>
        </Container>
      </MotionViewport>
    </Box>
  );
}
