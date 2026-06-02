export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      initialValue: 'Creative Capital Strategies',
    },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    {
      name: 'headerNavigation',
      title: 'Header Navigation',
      type: 'array',
      of: [{ type: 'link' }],
    },
    {
      name: 'footerNavigation',
      title: 'Footer Navigation',
      type: 'array',
      of: [{ type: 'link' }],
    },
    { name: 'footerDescription', title: 'Footer Description', type: 'text', rows: 3 },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'address', title: 'Address', type: 'text', rows: 2 },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
    { name: 'defaultSeoTitle', title: 'Default SEO Title', type: 'string' },
    {
      name: 'defaultSeoDescription',
      title: 'Default SEO Description',
      type: 'text',
      rows: 3,
    },
    { name: 'defaultSocialImage', title: 'Default Social Image', type: 'image' },
    {
      name: 'assessmentCtaLabel',
      title: 'Assessment CTA Label',
      type: 'string',
      initialValue: 'Complete Your Assessment',
    },
    { name: 'assessmentCtaUrl', title: 'Assessment CTA URL', type: 'string' },
    {
      name: 'schedulingCtaLabel',
      title: 'Scheduling CTA Label',
      type: 'string',
      initialValue: 'Schedule a Conversation',
    },
    { name: 'schedulingCtaUrl', title: 'Scheduling CTA URL', type: 'string' },
    {
      name: 'globalDisclosure',
      title: 'Global Disclosure Text',
      type: 'text',
      rows: 4,
    },
  ],
};
