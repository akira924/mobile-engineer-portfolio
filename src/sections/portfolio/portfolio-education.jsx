import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PORTFOLIO_EDUCATION, PORTFOLIO_CERTIFICATIONS } from 'src/_mock/_portfolio';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from '../home/components/section-title';
import { FloatLine, FloatPlusIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

function EntryCard({ item, meta }) {
  return (
    <Paper
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ p: 3, bgcolor: 'background.neutral' }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          sx={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1.5,
            flexShrink: 0,
            color: `${item.color}.main`,
            bgcolor: (theme) => theme.vars.palette[item.color].lighter,
          }}
        >
          <Iconify width={24} icon={item.icon} />
        </Box>

        <Stack spacing={0.5} sx={{ minWidth: 0 }}>
          <Typography variant="h6">{item.degree ?? item.title}</Typography>
          <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
            {item.school ?? item.issuer}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {meta}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export function PortfolioEducation({ sx, ...other }) {
  return (
    <Box
      id="education"
      component="section"
      sx={[{ py: { xs: 10, md: 20 }, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        <FloatPlusIcon sx={{ top: 72, left: 72 }} />
        <FloatLine sx={{ top: 80, left: 0 }} />

        <Container>
          <SectionTitle
            caption="Academics"
            title="Education &"
            txtGradient="certifications"
            description="Academic foundation in computer science and mathematics, plus continued learning in machine learning."
            sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
          />

          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Education
              </Typography>

              <Stack spacing={3}>
                {PORTFOLIO_EDUCATION.map((item) => (
                  <EntryCard
                    key={item.id}
                    item={item}
                    meta={`${item.period} | ${item.location}`}
                  />
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Certificates
              </Typography>

              <Stack spacing={3}>
                {PORTFOLIO_CERTIFICATIONS.map((item) => (
                  <EntryCard
                    key={item.id}
                    item={item}
                    meta={`Issued ${item.issuedAt}`}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}
