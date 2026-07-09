import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { PORTFOLIO_PROJECTS } from 'src/_mock/_portfolio';

import { Image } from 'src/components/image';
import { Label } from 'src/components/label';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function PortfolioProjectsView() {
  return (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={1} sx={{ mb: { xs: 5, md: 8 } }}>
        <Typography variant="h2">My projects</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640 }}>
          Mobile applications across health, fintech, travel, and productivity — built for iOS,
          Android, and cross-platform.
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        }}
      >
        {PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Container>
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

        <Stack direction="row" spacing={1.5} sx={{ pt: 1, flexWrap: 'wrap', gap: 1 }}>
          {links.appStore && (
            <Link href={links.appStore} target="_blank" rel="noopener" color="inherit" variant="body2">
              App Store
            </Link>
          )}
          {links.playStore && (
            <Link href={links.playStore} target="_blank" rel="noopener" color="inherit" variant="body2">
              Play Store
            </Link>
          )}
          {links.github && (
            <Link href={links.github} target="_blank" rel="noopener" color="inherit" variant="body2">
              GitHub
            </Link>
          )}
          {links.web && (
            <Link href={links.web} target="_blank" rel="noopener" color="inherit" variant="body2">
              Website
            </Link>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
