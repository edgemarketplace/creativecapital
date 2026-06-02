export default {
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'href', title: 'URL', type: 'string' },
    { name: 'external', title: 'External', type: 'boolean', initialValue: false },
  ],
};
