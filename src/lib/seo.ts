// src/lib/seo.ts
// SEO工具函数

import { siteConfig } from "../config/site";

// 生成网站结构化数据 (JSON-LD)
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.seo.author,
      "url": siteConfig.url
    }
  };
}

// 生成组织结构化数据
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.seo.author,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "sameAs": Object.values(siteConfig.social).filter(url => url !== ""),
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteConfig.email.contact,
      "contactType": "customer service"
    }
  };
}

// 生成游戏集合结构化数据
export function generateGameCollectionSchema(games: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Free Online Games - ${siteConfig.name}`,
    "description": "Collection of free online games to play in your browser",
    "url": siteConfig.url,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": games.length,
      "itemListElement": games.slice(0, 10).map((game, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Game",
          "name": game.name,
          "description": game.description.replace(/<[^>]*>/g, ''),
          "url": `${siteConfig.url}/${game.id}`,
          "image": game.image,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": game.rating,
            "ratingCount": game.votes
          }
        }
      }))
    }
  };
}

// 生成面包屑导航结构化数据
export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// 生成FAQ结构化数据
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// 生成meta标签
export function generateMetaTags(options: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}) {
  const {
    title = siteConfig.name,
    description = siteConfig.description,
    keywords = siteConfig.seo.keywords.join(", "),
    image = siteConfig.openGraph.images[0]?.url,
    url = siteConfig.url,
    type = "website"
  } = options;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type,
      images: image ? [{ url: image }] : siteConfig.openGraph.images,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : siteConfig.openGraph.images.map(img => img.url),
    }
  };
}