import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/global-config';
import { PORTFOLIO_TECH_STACK } from 'src/_mock/_portfolio';

import { Iconify } from 'src/components/iconify';
import { varScale, MotionViewport } from 'src/components/animate';

import { SectionTitle } from '../home/components/section-title';
import { FloatLine, FloatDotIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        zIndex: 2,
        bottom: 64,
        position: 'absolute',
        transform: 'translateX(-50%)',
        '& span': { position: 'static', opacity: 0.12 },
      }}
    >
      <FloatDotIcon />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <Box sx={{ flexGrow: 1 }} />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <FloatDotIcon />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function PortfolioTechStack({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ py: { xs: 10, md: 20 }, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionTitle
                caption="Technologies"
                title="Tools &"
                txtGradient="frameworks"
                description="Technologies I use daily to build, test, and ship mobile products across iOS, Android, and cross-platform stacks."
                sx={{ mb: { xs: 5, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}
              />

              <Box
                sx={{
                  mt: 5,
                  gap: 2,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                }}
              >
                {PORTFOLIO_TECH_STACK.map((tech) => (
                  <Stack
                    component={m.div}
                    variants={varScale('in')}
                    key={tech.name}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.neutral',
                    }}
                  >
                    <Iconify width={32} icon={tech.icon} />
                    <Box component="span" sx={{ typography: 'subtitle2' }}>
                      {tech.name}
                    </Box>
                  </Stack>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component={m.img}
                variants={{ ...varScale('in'), initial: { scale: 0.8, opacity: 0 } }}
                alt="Mobile tech stack"
                src={`${CONFIG.assetsDir}/assets/illustrations/illustration-integration.webp`}
                sx={{ width: 1, maxWidth: 480, mx: 'auto', display: 'block' }}
              />
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}
