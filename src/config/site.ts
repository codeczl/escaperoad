// src/config/site.ts
// 网站配置文件 - 修改这里的信息来定制你的游戏网站

export const siteConfig = {
  // 网站基本信息
  name: "Escape Road",
  tagline: "Play Escape Road and Best Car Racing Games Online!",
  description: "Play Escape Road and other exciting car racing games for free in your browser. Dodge traffic, avoid obstacles, and test your driving skills in endless racing adventures without downloads.",
  
  // 域名和URL
  domain: "escaperoad2.cc",
  url: "https://escaperoad2.cc",
  
  // 联系信息
  email: {
    contact: "contact@escaperoad2.cc",
    dmca: "dmca@escaperoad2.cc"
  },
  
  // SEO配置
  seo: {
    // 主要关键词
    keywords: [
      "escape road",
      "escape road game",
      "play escape road",
      "escape road online",
      "escape road free",
      "car games",
      "racing games",
      "car racing games",
      "avoid games",
      "traffic games",
      "traffic dodging games",
      "driving games",
      "escape games",
      "casual games",
      "browser games",
      "free car games",
      "online racing",
      "free racing games",
      "HTML5 games",
      "dodge traffic",
      "car escape game",
      "endless racing",
      "vehicle games"
    ],
    
    // 作者信息
    author: "Escape Road Hub Team",
    
    // 网站分类
    category: "Car Games",
    
    // 语言设置
    language: "en",
    locale: "en_US",
    
    // 地理位置 (可选)
    geo: {
      region: "US",
      placename: "United States"
    },
    
    // 机器人设置
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // 网站验证码 (Google Search Console, Bing等)
    verification: {
      google: "", // Google Search Console验证码
      bing: "",   // Bing Webmaster验证码
      yandex: "", // Yandex验证码
      baidu: ""   // 百度验证码
    }
  },
  
  // Open Graph (社交媒体分享)
  openGraph: {
    type: "website",
    siteName: "ESCAPE ROAD Online ",
    images: [
      {
        url: "/og-image.png", // 1200x630px 推荐尺寸
        width: 1200,
        height: 630,
        alt: "Escape Road Online - Play Free Car Racing Games Online"
      }
    ]
  },
  
  // Twitter Card配置
  twitter: {
    card: "summary_large_image",
    site: "@escaperoad", // Twitter用户名
    creator: "@escaperoad"
  },
  
  // 社交媒体链接
  social: {
    twitter: "https://twitter.com/escaperoad",
    facebook: "https://facebook.com/escaperoad",
    youtube: "https://youtube.com/@escaperoad",
    discord: "https://discord.gg/escaperoad",
    reddit: "https://reddit.com/r/escaperoad"
  },
  
  // 网站主题色
  theme: {
    primary: "#ffd700", // 金色
    secondary: "#000",   // 黑色
    accent: "#fff"       // 白色
  },
  
  // 分析和追踪 (可选)
  analytics: {
    googleAnalytics: "G-158DC020R5", // GA4 测量ID
    googleTagManager: "", // GTM ID (例: GTM-XXXXXXX)
    microsoftClarity: "", // Microsoft Clarity ID
    hotjar: "" // Hotjar ID
  }
};

// 默认游戏配置 - 修改这里来设置首页默认显示的游戏
export const defaultGameConfig = {
  // 默认游戏ID (必须在games-data.ts中存在)
  defaultGameId: "escaperoad",
  
  // 首页显示的游戏数量
  sidebarGamesCount: 12,
  
  // 搜索结果每页显示数量
  searchResultsPerPage: 20
};

// SEO页面模板 - 为不同类型的页面提供SEO模板
export const seoTemplates = {
  // 首页SEO
  home: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    keywords: siteConfig.seo.keywords.join(", ")
  },
  
  // 游戏页面SEO模板
  game: (gameName: string, gameDescription: string) => ({
    title: `Play ${gameName} Online Free - ${siteConfig.name}`,
    description: `Play ${gameName} for free in your browser. ${gameDescription.replace(/<[^>]*>/g, '').substring(0, 120)}...`,
    keywords: `${gameName}, play ${gameName}, ${gameName} online, free games, ${siteConfig.seo.keywords.slice(0, 5).join(", ")}`
  }),
  
  // 搜索页面SEO模板
  search: (query: string) => ({
    title: `Search Results for "${query}" - ${siteConfig.name}`,
    description: `Find games related to "${query}". Browse our collection of free online games.`,
    keywords: `${query}, search games, ${siteConfig.seo.keywords.slice(0, 3).join(", ")}`
  }),
  
  // 静态页面SEO模板
  static: {
    about: {
      title: `Escape Road - Car Racing Game Guide | ${siteConfig.name}`,
      description: `Escape Road Hub is your ultimate destination for car racing games. Learn how to play Escape Road, master driving techniques, and discover similar racing games.`,
      keywords: `escape road, car racing, driving games, racing tips, escape road guide, car games, browser racing, racing fan site`
    },
    contact: {
      title: `Contact Us - ${siteConfig.name}`,
      description: `Get in touch with the ${siteConfig.name} team. We'd love to hear from you!`,
      keywords: `contact, support, ${siteConfig.name.toLowerCase()}, help`
    },
    privacy: {
      title: `Privacy Policy - ${siteConfig.name}`,
      description: `Read our privacy policy to understand how we protect your data on ${siteConfig.name}.`,
      keywords: `privacy policy, data protection, ${siteConfig.name.toLowerCase()}`
    },
    terms: {
      title: `Terms of Use - ${siteConfig.name}`,
      description: `Terms and conditions for using ${siteConfig.name} gaming platform.`,
      keywords: `terms of use, conditions, ${siteConfig.name.toLowerCase()}`
    },
    copyright: {
      title: `Copyright & DMCA - ${siteConfig.name}`,
      description: `Copyright information and DMCA takedown procedures for ${siteConfig.name}.`,
      keywords: `copyright, DMCA, intellectual property, ${siteConfig.name.toLowerCase()}`
    }
  }
};