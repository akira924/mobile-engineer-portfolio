import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { PORTFOLIO_EXPERIENCE } from 'src/_mock/_portfolio';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from '../home/components/section-title';
import { FloatLine, FloatPlusIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

export function PortfolioExperience({ sx, ...other }) {
  const lastItem = PORTFOLIO_EXPERIENCE[PORTFOLIO_EXPERIENCE.length - 1].id;

  return (
    <Box
      id="experience"
      component="section"
      sx={[{ py: { xs: 10, md: 20 }, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        <FloatPlusIcon sx={{ top: 72, right: 72 }} />
        <FloatLine sx={{ top: 80, right: 0, left: 'auto', width: 'calc(100% - 80px)' }} />

        <Container>
          <SectionTitle
            caption="Career"
            title="Work"
            txtGradient="experience"
            description="Roles where I have led mobile development, mentored teams, and shipped products at scale."
            sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
          />

          <Timeline position="alternate">
            {PORTFOLIO_EXPERIENCE.map((item) => (
              <TimelineItem key={item.id}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.period}
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color={item.color}>
                    <Iconify width={20} icon={item.icon} />
                  </TimelineDot>
                  {lastItem !== item.id && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent sx={{ py: { xs: 3, md: 4 }, px: 2 }}>
                  <Paper
                    component={m.div}
                    variants={varFade('inUp', { distance: 24 })}
                    sx={{ p: 3, bgcolor: 'background.neutral' }}
                  >
                    <Typography variant="h6">{item.role}</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 1 }}>
                      {item.company}
                    </Typography>
                    <Typography variant="caption" sx={{ display: { xs: 'block', md: 'none' }, color: 'text.secondary', mb: 1 }}>
                      {item.period}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </MotionViewport>
    </Box>
  );
}
