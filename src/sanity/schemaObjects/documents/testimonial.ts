export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'role', title: 'Role or Descriptor', type: 'string' },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    {
      name: 'approved',
      title: 'Approved for Public Use',
      type: 'boolean',
      initialValue: false,
    },
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
  ],
};
