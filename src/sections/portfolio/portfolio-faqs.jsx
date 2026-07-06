import { useState } from 'react';
import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion, { accordionClasses } from '@mui/material/Accordion';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { PORTFOLIO_FAQS } from 'src/_mock/_portfolio';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from '../home/components/section-title';
import { FloatLine, FloatPlusIcon, FloatTriangleDownIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

export function PortfolioFaqs({ sx, ...other }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      sx={[{ py: { xs: 10, md: 20 }, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        <FloatPlusIcon sx={{ top: 72, left: 72 }} />
        <FloatTriangleDownIcon sx={{ top: 120, right: 80, opacity: 0.12 }} />
        <FloatLine sx={{ top: 80, left: 0 }} />

        <Container>
          <SectionTitle
            caption="FAQs"
            title="Common"
            txtGradient="questions"
            sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
          />

          <Box
            sx={{
              gap: 2,
              mx: 'auto',
              maxWidth: 720,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {PORTFOLIO_FAQS.map((item, index) => (
              <Accordion
                key={item.question}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={[
                  (theme) => ({
                    borderRadius: 2,
                    transition: theme.transitions.create(['background-color', 'box-shadow'], {
                      duration: theme.transitions.duration.short,
                    }),
                    bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    [`&.${accordionClasses.expanded}`]: {
                      bgcolor: 'background.paper',
                      boxShadow: theme.vars.customShadows.z8,
                    },
                  }),
                ]}
              >
                <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                  <Typography component="span" variant="subtitle1">
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography sx={{ color: 'text.secondary' }}>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Stack
            component={m.div}
            variants={varFade('inUp', { distance: 24 })}
            alignItems="center"
            spacing={2}
            sx={{ mt: 8, textAlign: 'center' }}
          >
            <Typography variant="h5">Still have questions?</Typography>
            <Button
              component={RouterLink}
              href={paths.contact}
              size="large"
              variant="contained"
              startIcon={<Iconify icon="solar:letter-bold" />}
            >
              Get in touch
            </Button>
          </Stack>
        </Container>
      </MotionViewport>
    </Box>
  );
}
