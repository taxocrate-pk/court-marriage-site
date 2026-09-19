import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://courtmarriage.site';
const SITE_NAME = 'Court Marriage Site';

export default function SEO({ title, description, path = '/', schema = [] }) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.filter(Boolean).map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
