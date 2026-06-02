export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Strategies', value: 'strategies' },
          { title: 'First Responders', value: 'first-responders' },
          { title: 'Business Owners', value: 'business-owners' },
          { title: 'Retirement', value: 'retirement' },
        ],
      },
    },
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
  ],
};
