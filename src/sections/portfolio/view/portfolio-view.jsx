import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { PortfolioHero } from '../portfolio-hero';
import { PortfolioFaqs } from '../portfolio-faqs';
import { PortfolioAbout } from '../portfolio-about';
import { PortfolioContact } from '../portfolio-contact';
import { PortfolioProjects } from '../portfolio-projects';
import { PortfolioEducation } from '../portfolio-education';
import { PortfolioTechStack } from '../portfolio-tech-stack';
import { PortfolioExperience } from '../portfolio-experience';
import { PortfolioTestimonials } from '../portfolio-testimonials';

// ----------------------------------------------------------------------

export function PortfolioView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <PortfolioHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <PortfolioAbout />
        <PortfolioProjects />
        <PortfolioExperience />
        <PortfolioEducation />
        <PortfolioTechStack />
        <PortfolioTestimonials />
        <PortfolioFaqs />
        <PortfolioContact />
      </Stack>
    </>
  );
}
