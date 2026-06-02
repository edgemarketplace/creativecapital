export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'title', title: 'SEO Title', type: 'string' },
    { name: 'description', title: 'SEO Description', type: 'string', rows: 3 },
    { name: 'ogImage', title: 'Open Graph Image', type: 'image', options: { hotspot: true } },
    { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
    { name: 'noIndex', title: 'No Index', type: 'boolean', initialValue: false },
  ],
};
