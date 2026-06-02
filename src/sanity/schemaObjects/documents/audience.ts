export default {
  name: 'audience',
  title: 'Audience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name (e.g., Shield, Briefcase, Users, GraduationCap)',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'cta', title: 'CTA', type: 'callToAction' },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
