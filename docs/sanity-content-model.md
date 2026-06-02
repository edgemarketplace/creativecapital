# Sanity Content Model

## Documents

### siteSettings (singleton)
Global site configuration. One instance, edited via Structure tool.
Fields: businessName, logo, headerNavigation, footerNavigation, footerDescription, phone, email, address, socialLinks, defaultSeoTitle, defaultSeoDescription, defaultSocialImage, assessmentCtaLabel, assessmentCtaUrl, schedulingCtaLabel, schedulingCtaUrl, globalDisclosure.

### page
Individual pages. Each has a slug, pageType, optional featured image, and a sections array.
Reference pageType to determine page layout: home, about, strategy, audience, resource-index, video-index, faq, contact, assessment, landing.

### article
Blog posts and educational resources. Has portable text body, categories, related videos/articles.

### video
YouTube-hosted content. Fields: youtubeUrl, thumbnail, category, featured toggle.

### testimonial
Client quotes. Must have `approved: true` to appear publicly. Includes sortOrder.

### teamMember
Team profiles. Includes headshot, bio, contact info, social links, sortOrder.

### faq
Frequently asked questions with category grouping and sortOrder.

### audience
Audience segments: first-responders, business-owners, families, retirement.

## Objects

### seo
Reusable SEO block: title, description, ogImage, canonicalUrl, noIndex.

### link
Reusable link: label, href, external flag.

### imageWithAlt
Image field with required alt text.

### callToAction
Reusable CTA: label, href, external flag.

## Page Sections (Blocks)

Each section is a schema object that can be added to a page's sections array:
heroSection, trustMetrics, introSection, problemCards, strategyBenefits,
imageTextSection, videoFeature, comparisonTable, processSteps, audienceCards,
testimonials, resourceGrid, faqSection, assessmentCta, disclosureBlock.

## Initial Seed Content Required

1. siteSettings document
2. Homepage (page, pageType: home) with all 15 sections
3. About page (page, pageType: about)
4. At least 2 team members
5. At least 4 FAQs
6. At least 2 audiences (first-responders, business-owners)
7. Placeholder articles and videos (clearly marked)
