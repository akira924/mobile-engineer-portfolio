import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';
import { PORTFOLIO_SKILLS, PORTFOLIO_PROFILE } from 'src/_mock/_portfolio';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from '../home/components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <FloatPlusIcon sx={{ top: 72, left: 72 }} />
    <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
    <FloatLine sx={{ top: 80, left: 0 }} />
    <FloatLine sx={{ bottom: 80, left: 0 }} />
    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function PortfolioAbout({ sx, ...other }) {
  const renderDescription = () => (
    <>
      <SectionTitle
        caption="About me"
        title="What I"
        txtGradient="bring"
        description={PORTFOLIO_PROFILE.quote}
        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
      />

      <Stack spacing={4} sx={{ maxWidth: { sm: 560, md: 480 }, mx: { xs: 'auto', md: 'unset' } }}>
        {PORTFOLIO_SKILLS.map((item) => (
          <Box
            component={m.div}
            variants={varFade('inUp', { distance: 24 })}
            key={item.title}
            sx={{ gap: 2.5, display: 'flex' }}
          >
            <Iconify width={40} icon={item.icon} sx={{ flexShrink: 0, color: 'primary.main' }} />
            <Stack spacing={0.5}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );

  const renderImage = () => (
    <Stack
      component={m.div}
      variants={varFade('inRight', { distance: 24 })}
      sx={{
        height: 1,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={[
          (theme) => ({
            left: 0,
            width: 480,
            borderRadius: 2,
            position: 'absolute',
            bgcolor: 'background.default',
            boxShadow: `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
            ...theme.applyStyles('dark', {
              boxShadow: `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
            }),
          }),
        ]}
      >
        <Box
          component="img"
          alt="Mobile development"
          src={`${CONFIG.assetsDir}/assets/images/home/home-chart.webp`}
          sx={{ width: 480, borderRadius: 2 }}
        />
      </Box>
    </Stack>
  );

  return (
    <Box
      id="about"
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          py: { xs: 10, md: 20 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ position: 'relative' }}>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>{renderDescription()}</Grid>

            <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ md: 6, lg: 5 }}>
              {renderImage()}
            </Grid>
          </Grid>

          <CircleSvg variants={varFade('in')} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Box>
  );
}
