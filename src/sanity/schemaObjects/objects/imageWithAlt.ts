export default {
  name: 'imageWithAlt',
  title: 'Image with Alt',
  type: 'image',
  options: { hotspot: true },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
