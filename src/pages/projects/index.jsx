import { CONFIG } from 'src/global-config';

import { PortfolioProjectsView } from 'src/sections/portfolio/view';

// ----------------------------------------------------------------------

const metadata = { title: `Projects - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <PortfolioProjectsView />
    </>
  );
}
