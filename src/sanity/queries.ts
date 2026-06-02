import { client, previewClient } from './client';

export async function getPageBySlug(slug: string, preview = false) {
  const c = preview ? previewClient : client;
  return c.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getAllPages() {
  return client.fetch(`*[_type == "page"]{title, "slug": slug.current}`);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getArticles(limit = 10) {
  return client.fetch(
    `*[_type == "article"] | order(publishedDate desc) [0...$limit] {
      title, excerpt, "slug": slug.current, featuredImage, publishedDate, author
    }`,
    { limit }
  );
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getVideos(limit = 10) {
  return client.fetch(
    `*[_type == "video"] | order(publishedDate desc) [0...$limit] {
      title, description, "slug": slug.current, youtubeUrl, thumbnail, category, featured
    }`,
    { limit }
  );
}

export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial" && approved == true] | order(sortOrder asc)`
  );
}

export async function getTeamMembers() {
  return client.fetch(
    `*[_type == "teamMember"] | order(sortOrder asc)`
  );
}

export async function getFaqs(category?: string) {
  if (category) {
    return client.fetch(
      `*[_type == "faq" && category == $category] | order(sortOrder asc)`,
      { category }
    );
  }
  return client.fetch(`*[_type == "faq"] | order(sortOrder asc)`);
}

export async function getAudiences() {
  return client.fetch(`*[_type == "audience"]`);
}

export async function getAudienceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "audience" && slug.current == $slug][0]`,
    { slug }
  );
}
