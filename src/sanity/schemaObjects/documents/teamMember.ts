export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'shortBio', title: 'Short Biography', type: 'text', rows: 2 },
    { name: 'fullBio', title: 'Full Biography', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
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
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
  ],
};
