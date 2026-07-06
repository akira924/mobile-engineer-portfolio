import { PORTFOLIO_PROFILE } from 'src/_mock/_portfolio';

import { PortfolioView } from 'src/sections/portfolio/view';

// ----------------------------------------------------------------------

const metadata = {
  title: `${PORTFOLIO_PROFILE.name} - ${PORTFOLIO_PROFILE.role}`,
  description: PORTFOLIO_PROFILE.tagline,
};

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <PortfolioView />
    </>
  );
}
