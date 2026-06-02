export default {
  name: 'video',
  title: 'Video',
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
    },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'youtubeUrl', title: 'YouTube URL', type: 'url' },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'publishedDate', title: 'Published Date', type: 'date' },
    {
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
    },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
