export const schemaTypes: any[] = [
  // Objects (must be before documents that reference them)
  require('./objects/seo').default,
  require('./objects/link').default,
  require('./objects/imageWithAlt').default,
  require('./objects/callToAction').default,
  // Documents
  require('./documents/siteSettings').default,
  require('./documents/page').default,
  require('./documents/article').default,
  require('./documents/video').default,
  require('./documents/testimonial').default,
  require('./documents/teamMember').default,
  require('./documents/faq').default,
  require('./documents/audience').default,
];
