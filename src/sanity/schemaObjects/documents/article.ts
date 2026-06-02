export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'publishedDate', title: 'Published Date', type: 'date' },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Financial Education', value: 'financial-education' },
          { title: 'Strategy', value: 'strategy' },
          { title: 'Retirement', value: 'retirement' },
          { title: 'Taxes', value: 'taxes' },
          { title: 'First Responders', value: 'first-responders' },
          { title: 'Business Owners', value: 'business-owners' },
        ],
      },
    },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'relatedVideos',
      title: 'Related Videos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
    },
    {
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
    },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
