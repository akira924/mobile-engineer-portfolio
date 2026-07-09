import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { PORTFOLIO_PROJECTS } from 'src/_mock/_portfolio';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from '../home/components/section-title';
import { FloatLine, FloatPlusIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.filter((project) => project.featured);

export function PortfolioProjects({ sx, ...other }) {
  return (
    <Box
      id="projects"
      component="section"
      sx={[{ py: { xs: 10, md: 20 }, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        <FloatPlusIcon sx={{ top: 72, left: 72 }} />
        <FloatLine sx={{ top: 80, left: 0 }} />

        <Container>
          <SectionTitle
            caption="Portfolio"
            title="Featured"
            txtGradient="projects"
            description="A selection of mobile apps I have designed, built, and shipped to the App Store and Google Play."
            sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
          />

          <Box
            sx={{
              gap: 3,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            }}
          >
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>

          <Stack alignItems="center" sx={{ mt: 8 }}>
            <Button
              component={RouterLink}
              href={paths.projects}
              size="large"
              variant="outlined"
              endIcon={<Iconify icon="eva:arrow-forward-fill" />}
            >
              View my projects
            </Button>
          </Stack>
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

function ProjectCard({ project }) {
  const { title, category, description, coverUrl, tech, links } = project;

  return (
    <Card
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          transition: theme.transitions.create(['box-shadow', 'transform']),
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.vars.customShadows.z24,
          },
        }),
      ]}
    >
      <Box sx={{ position: 'relative' }}>
        <Image alt={title} src={coverUrl} ratio="16/10" sx={{ borderRadius: '12px 12px 0 0' }} />
        <Label color="info" variant="filled" sx={{ top: 16, right: 16, position: 'absolute' }}>
          {category}
        </Label>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
          {description}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={0.75}>
          {tech.map((item) => (
            <Chip key={item} label={item} size="small" variant="soft" />
          ))}
        </Stack>

        <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
          {links.appStore && (
            <Link href={links.appStore} target="_blank" rel="noopener" color="inherit" variant="body2">
              <Iconify icon="logos:apple-app-store" width={20} sx={{ mr: 0.5, verticalAlign: 'middle' }} />
              App Store
            </Link>
          )}
          {links.playStore && (
            <Link href={links.playStore} target="_blank" rel="noopener" color="inherit" variant="body2">
              <Iconify icon="logos:google-play-icon" width={20} sx={{ mr: 0.5, verticalAlign: 'middle' }} />
              Play Store
            </Link>
          )}
          {links.github && (
            <Link href={links.github} target="_blank" rel="noopener" color="inherit" variant="body2">
              <Iconify icon="mdi:github" width={20} sx={{ mr: 0.5, verticalAlign: 'middle' }} />
              GitHub
            </Link>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
