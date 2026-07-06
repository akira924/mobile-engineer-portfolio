import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" /> },
  {
    title: 'About',
    path: paths.about,
    icon: <Iconify width={22} icon="solar:user-rounded-bold-duotone" />,
  },
  {
    title: 'Projects',
    path: paths.projects,
    icon: <Iconify width={22} icon="solar:smartphone-2-bold-duotone" />,
  },
  {
    title: 'Blog',
    path: paths.post.root,
    icon: <Iconify width={22} icon="solar:document-text-bold-duotone" />,
  },
  {
    title: 'Contact',
    path: paths.contact,
    icon: <Iconify width={22} icon="solar:letter-bold-duotone" />,
  },
];
