# 🎮 游戏网站模板 - 建站指南

## 🚀 建立新站完整流程

### 📝 第一步：修改网站配置（5分钟）

**只需修改一个文件**：`src/config/site.ts`

```typescript
export const siteConfig = {
  // 1. 修改网站名称和标语
  name: "你的网站名称",
  tagline: "你的网站标语",
  description: "网站描述（用于SEO）",
  
  // 2. 修改域名
  domain: "your-domain.com",
  url: "https://your-domain.com",
  
  // 3. 修改邮箱
  email: {
    contact: "contact@your-domain.com",
    dmca: "dmca@your-domain.com"
  },
  
  // 4. 修改SEO关键词（10-15个）
  seo: {
    keywords: [
      "主要关键词1",
      "主要关键词2",
      "主要关键词3",
      // ... 添加更多
    ],
    author: "你的团队名称",
    category: "游戏分类", // 如：FPS Games, Sports Games
  },
  
  // 5. 修改社交媒体（可选）
  social: {
    twitter: "https://twitter.com/your_account",
    facebook: "https://facebook.com/your_page",
    // ...
  },
  
  // 6. 添加Analytics（可选）
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // 你的GA4 ID
  }
};

// 7. 设置默认游戏
export const defaultGameConfig = {
  defaultGameId: "your-game-id", // 首页显示的游戏
};
```

---

### 🎮 第二步：添加/修改游戏（10分钟）

**修改文件**：`src/data/games-data.ts`

#### 2.1 添加新游戏
```typescript
export const gamesData: Record<string, Game> = {
  "your-game-id": {
    id: "your-game-id",
    name: "游戏名称",
    title: "游戏标题 – SEO描述",
    image: "/images/games/your-game.png",
    rating: 4.5,
    votes: 1000,
    plays: 50000,
    developer: "开发商",
    released: "发布日期",
    technology: "HTML5",
    tags: ["标签1", "标签2", "标签3"],
    description: "<h2>游戏介绍</h2><p>详细描述...</p>",
    metaDescription: "简短描述（用于搜索结果）",
    iframeUrl: "https://游戏网址.com",
  },
  // ... 其他游戏
};
```

#### 2.2 调整游戏顺序
把主打游戏放在最前面，它会自动显示在首页

---

### 🖼️ 第三步：添加游戏图片（5分钟）

**位置**：`public/images/games/`

1. 准备游戏缩略图（推荐200x200px）
2. 命名为：`your-game.png`
3. 放到 `public/images/games/` 文件夹

---

### ✅ 第四步：测试（2分钟）

```bash
# 启动开发服务器
npm run dev

# 访问测试
http://localhost:3000
```

**检查**：
- ✅ 首页显示正确的游戏
- ✅ 网站名称正确
- ✅ 游戏图片显示
- ✅ 搜索功能正常

---

### 🚀 第五步：部署上线（10分钟）

```bash
# 1. 构建生产版本
npm run build

# 2. 测试生产版本
npm start

# 3. 部署到服务器
# 上传整个项目到服务器
```

**配置**：
- 设置域名DNS
- 安装SSL证书
- 启动服务

---

## 📋 快速检查清单

### 必须修改：
- [ ] `src/config/site.ts` - 网站名称、域名、关键词
- [ ] `src/config/site.ts` - defaultGameId（首页游戏）
- [ ] `src/data/games-data.ts` - 游戏排序（主打游戏放第一）
- [ ] `public/images/games/` - 添加游戏图片

### 可选修改：
- [ ] `src/config/site.ts` - Analytics ID
- [ ] `src/data/games-data.ts` - 添加新游戏
- [ ] `src/app/about/page.tsx` - 修改About内容

---

## 💡 实际例子

### 例子1：建立Slope游戏站

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "SLOPE GAMES HUB",
  tagline: "Play Slope and Best 3D Running Games!",
  domain: "slope-games.io",
  seo: {
    keywords: ["slope", "slope game", "3d games", ...],
  }
};

export const defaultGameConfig = {
  defaultGameId: "slope", // 首页显示Slope
};
```

### 例子2：建立足球游戏站

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "FOOTBALL MANIA",
  tagline: "Play the Best Football Games Online!",
  domain: "football-mania.io",
  seo: {
    keywords: ["football games", "soccer games", ...],
  }
};

export const defaultGameConfig = {
  defaultGameId: "football-bros",
};
```

---

## 🎯 核心要点

1. **只需修改2个文件**：
   - `src/config/site.ts` - 网站配置
   - `src/data/games-data.ts` - 游戏数据

2. **游戏排序很重要**：
   - 第一个游戏 = 首页显示
   - 或者设置 `defaultGameId`

3. **图片命名要匹配**：
   - 游戏ID：`slope`
   - 图片名：`slope.png`

4. **SEO关键词要精准**：
   - 主关键词放前面
   - 10-15个相关词

---

## ⚡ 最快建站（3步）

```bash
# 1. 修改配置（1个文件）
编辑 src/config/site.ts

# 2. 调整游戏顺序
编辑 src/data/games-data.ts（把主打游戏放第一）

# 3. 测试
npm run dev
```

就这么简单！🎉

---

## 📊 SEO 提交搜索引擎

### 1. Google Search Console
- **网址**：https://search.google.com/search-console
- **操作**：添加网站 → 验证所有权 → 提交站点地图
- **站点地图地址**：`https://你的域名.com/sitemap.xml`
- **修改文件**：`public/sitemap.xml`（更新域名和页面列表）

### 2. Google Analytics
- **网址**：https://analytics.google.com/
- **操作**：创建 GA4 属性 → 获取测量 ID（格式：G-XXXXXXXXXX）
- **修改文件**：`src/config/site.ts`
```typescript
analytics: {
  googleAnalytics: "G-你的代码",
}
```

### 3. Bing Webmaster Tools
- **网址**：https://www.bing.com/webmasters
- **操作**：添加站点 → 验证所有权 → 提交站点地图
- **站点地图地址**：`https://你的域名.com/sitemap.xml`

### 4. IndexNow（快速索引）
- **修改文件**：`indexnow-submit.json`（根目录）
- **更新内容**：修改 `urlList` 中的 URL 列表
- **提交方式**：双击 `submit-indexnow.bat`
- **成功标志**：显示 "Success! URLs submitted to IndexNow."
- **注意**：不要频繁提交，只在添加新页面或更新内容时提交

---

## 🔧 技术栈

- **框架**：Next.js 16
- **语言**：TypeScript
- **样式**：CSS
- **部署**：静态导出（支持 Cloudflare Pages、Vercel 等）
