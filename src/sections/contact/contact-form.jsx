import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { PORTFOLIO_CONTACT_ITEMS } from 'src/_mock/_portfolio';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ContactForm({ sx, ...other }) {
  return (
    <Box sx={sx} {...other}>
      <Typography variant="h3">Let&apos;s talk about your next project.</Typography>

      <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
        Send a message below or reach out directly — I&apos;m open to discussing mobile products,
        timelines, and collaboration opportunities.
      </Typography>

      <Stack spacing={2} sx={{ my: 5 }}>
        {PORTFOLIO_CONTACT_ITEMS.map((item) => (
          <Stack key={item.label} direction="row" spacing={1.5} alignItems="flex-start">
            <Iconify icon={item.icon} width={22} sx={{ mt: 0.25, color: 'primary.main', flexShrink: 0 }} />
            <Box>
              <Typography variant="subtitle2">{item.label}</Typography>
              <Link
                href={item.href}
                color="text.secondary"
                underline="hover"
                variant="body2"
                target={item.label === 'Website' || item.label === 'Address' ? '_blank' : undefined}
                rel={
                  item.label === 'Website' || item.label === 'Address' ? 'noopener noreferrer' : undefined
                }
              >
                {item.value}
              </Link>
            </Box>
          </Stack>
        ))}
      </Stack>

      <Box
        sx={{
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField fullWidth label="Name" />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Subject" />
        <TextField fullWidth label="Enter your message here." multiline rows={4} />
      </Box>

      <Button size="large" variant="contained" sx={{ mt: 3 }}>
        Submit
      </Button>
    </Box>
  );
}
