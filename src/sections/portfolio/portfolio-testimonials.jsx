import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PORTFOLIO_TESTIMONIALS } from 'src/_mock/_portfolio';

import { varFade, MotionViewport, AnimateCountUp } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SectionTitle } from '../home/components/section-title';
import { FloatLine, FloatTriangleDownIcon } from '../home/components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
      <FloatTriangleDownIcon sx={{ width: 30, height: 15, opacity: 0.24, position: 'static' }} />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function PortfolioTestimonials({ sx, ...other }) {
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 3 },
    breakpoints: {
      [carouselBreakpoints.sm]: { slideSpacing: '24px' },
      [carouselBreakpoints.md]: { slideSpacing: '40px' },
    },
  });

  const horizontalDivider = (position) => (
    <Divider
      component="div"
      sx={[
        (theme) => ({
          width: 1,
          opacity: 0.16,
          height: '1px',
          border: 'none',
          position: 'absolute',
          background: `linear-gradient(to right, transparent 0%, ${theme.vars.palette.grey[500]} 50%, transparent 100%)`,
          ...(position === 'top' && { top: 0 }),
          ...(position === 'bottom' && { bottom: 0 }),
        }),
      ]}
    />
  );

  return (
    <Box
      component="section"
      sx={[{ py: 10, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container>
          <SectionTitle
            caption="Testimonials"
            title="What clients"
            txtGradient="say"
            sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
          />

          <Stack sx={{ position: 'relative', py: { xs: 5, md: 8 } }}>
            {horizontalDivider('top')}

            <Carousel carousel={carousel}>
              {PORTFOLIO_TESTIMONIALS.map((item) => (
                <Stack key={item.id} component={m.div} variants={varFade('in')}>
                  <Stack spacing={1} sx={{ typography: 'subtitle2' }}>
                    <Rating size="small" value={item.rating} precision={0.5} readOnly />
                    {item.role}
                  </Stack>

                  <Typography
                    sx={(theme) => ({
                      ...theme.mixins.maxLine({ line: 4, persistent: theme.typography.body1 }),
                      mt: 2,
                      mb: 3,
                    })}
                  >
                    {item.content}
                  </Typography>

                  <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={item.name} src={item.avatar} sx={{ width: 48, height: 48 }} />
                    <Stack sx={{ typography: 'subtitle1' }}>
                      <Box component="span">{item.name}</Box>
                      <Box component="span" sx={{ typography: 'body2', color: 'text.disabled' }}>
                        {item.postedAt}
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              ))}
            </Carousel>

            <Box
              sx={{
                mt: { xs: 5, md: 8 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <CarouselDotButtons
                variant="rounded"
                scrollSnaps={carousel.dots.scrollSnaps}
                selectedIndex={carousel.dots.selectedIndex}
                onClickDot={carousel.dots.onClickDot}
              />
              <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
            </Box>
          </Stack>

          <Stack sx={{ py: { xs: 5, md: 8 }, position: 'relative' }}>
            {horizontalDivider('top')}

            <Stack direction={{ xs: 'column', md: 'row' }} divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />}>
              {[
                { label: 'Apps shipped', value: 24 },
                { label: 'Happy clients', value: 18 },
                { label: 'Avg. rating', value: 4.9 },
              ].map((item) => (
                <Stack key={item.label} spacing={2} sx={{ textAlign: 'center', width: 1, py: { xs: 3, md: 0 } }}>
                  <m.div variants={varFade('inUp', { distance: 24 })}>
                    <AnimateCountUp
                      to={item.value}
                      unit={item.label === 'Avg. rating' ? '' : '+'}
                      toFixed={item.label === 'Avg. rating' ? 1 : 0}
                      sx={[
                        (theme) => ({
                          fontWeight: 'fontWeightBold',
                          fontSize: { xs: 40, md: 64 },
                          lineHeight: { xs: 50 / 40, md: 80 / 64 },
                          fontFamily: theme.typography.fontSecondaryFamily,
                        }),
                      ]}
                    />
                  </m.div>
                  <m.div variants={varFade('inUp', { distance: 24 })}>
                    <Box
                      component="span"
                      sx={[
                        (theme) => ({
                          ...theme.mixins.textGradient(
                            `90deg, ${theme.vars.palette.text.primary}, ${varAlpha(theme.vars.palette.text.primaryChannel, 0.2)}`
                          ),
                          opacity: 0.4,
                          typography: 'h6',
                        }),
                      ]}
                    >
                      {item.label}
                    </Box>
                  </m.div>
                </Stack>
              ))}
            </Stack>

            {horizontalDivider('bottom')}
          </Stack>
        </Container>
      </MotionViewport>
    </Box>
  );
}
