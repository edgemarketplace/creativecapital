import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(S.documentList().title('Pages').filter('_type == "page"')),
      S.listItem()
        .title('Articles')
        .child(S.documentList().title('Articles').filter('_type == "article"')),
      S.listItem()
        .title('Videos')
        .child(S.documentList().title('Videos').filter('_type == "video"')),
      S.listItem()
        .title('Team Members')
        .child(S.documentList().title('Team Members').filter('_type == "teamMember"')),
      S.listItem()
        .title('Testimonials')
        .child(S.documentList().title('Testimonials').filter('_type == "testimonial"')),
      S.listItem()
        .title('FAQs')
        .child(S.documentList().title('FAQs').filter('_type == "faq"')),
      S.listItem()
        .title('Audiences')
        .child(S.documentList().title('Audiences').filter('_type == "audience"')),
    ]);
