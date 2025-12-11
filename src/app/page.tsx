// src/app/page.tsx
"use client";

import { useState } from "react";

// Header / Footer 在 src/components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CommentsSection } from "../components/CommentsSection";
import { RecommendedGames } from "../components/RecommendedGames";
import { gamesArray, Game } from "../data/games-data";
import { useRouter } from "next/navigation";
import { defaultGameConfig } from "../config/site";
import { generateWebsiteSchema, generateOrganizationSchema, generateGameCollectionSchema } from "../lib/seo"; 

export default function HomePage() {
  // 使用配置文件中的默认游戏
  const defaultGame = gamesArray.find(game => game.id === defaultGameConfig.defaultGameId) || gamesArray[0];
  const [selectedGame, setSelectedGame] = useState<Game>(defaultGame);
  const router = useRouter();

  // 侧边栏游戏数量 - 左右各6个
  const sidebarGamesCount = 6;

  return (
    <div className="container">
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateWebsiteSchema(),
            generateOrganizationSchema(),
            generateGameCollectionSchema(gamesArray)
          ])
        }}
      />
      
      <Header />

      {/* Main Content */}
      <main className="main-content">
        {/* 左侧 - 游戏缩略图 */}
        <aside className="sidebar-left">
          <div className="game-grid">
            {gamesArray.filter(game => game.id !== selectedGame.id).slice(0, sidebarGamesCount).map((game) => (
              <div
                key={game.id}
                className="game-thumb"
                onClick={() => router.push(`/${game.id}`)}
              >
                <img src={game.image} alt={game.name} />
              </div>
            ))}
          </div>
        </aside>

        {/* 中间 - 主游戏区 */}
        <section className="game-area">
          {/* 顶部广告位（如果你有的话，可以保留 class，暂时放空） */}
          <div className="ad-banner-top">
            {/* Ad code here */}
          </div>

          {/* 游戏标题 / 评分区域 */}
          <div className="game-header">
            <h1 className="game-title">{selectedGame.title}</h1>
            <div className="game-meta">
              <span>⭐ {selectedGame.rating.toFixed(1)}</span>
              <span>{selectedGame.votes.toLocaleString()} votes</span>
              <span>{selectedGame.plays.toLocaleString()} plays</span>
            </div>
          </div>

          {/* 游戏 iframe */}
          <div className="game-embed-wrapper">
            <div className="game-embed-placeholder">
              <iframe
                className="gameloc"
                id="gameFrame"
                allowFullScreen
                allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write"
                name="gameFrame"
                scrolling="no"
                sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
                src={selectedGame.iframeUrl}      // ⭐ 关键：取当前选中游戏的嵌入链接
                title={selectedGame.name}
              />
            </div>
          </div>

          {/* SEO信息框和推荐区域 */}
          <div className="description-and-recommended">
            {/* 合并的SEO信息框（包含评论区） */}
            <div className="combined-seo-box">
              {/* 游戏详细信息 */}
              <div className="game-details-section">
                <h3>Game Details</h3>
                <ul>
                  <li>
                    <strong>Developer:</strong> {selectedGame.developer}
                  </li>
                  <li>
                    <strong>Released:</strong> {selectedGame.released}
                  </li>
                  <li>
                    <strong>Technology:</strong> {selectedGame.technology}
                  </li>
                </ul>
              </div>

              {/* 标签区域 */}
              <div className="tags-section">
                <h3>Tags</h3>
                <div className="tag-list">
                  {selectedGame.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 游戏描述 */}
              <div className="description-section">
                <h2>About {selectedGame.name}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedGame.description,
                  }}
                />
              </div>

              {/* 评论区 */}
              <div className="comments-in-seo">
                <CommentsSection game={selectedGame} />
              </div>
            </div>

            {/* 推荐游戏区域 */}
            <aside className="recommended-section">
              <RecommendedGames currentGame={selectedGame} />
            </aside>
          </div>
        </section>

        {/* 右侧 - 更多游戏推荐 */}
        <aside className="sidebar-right">
          <div className="game-grid-right">
            {gamesArray.filter(game => game.id !== selectedGame.id).slice(sidebarGamesCount, sidebarGamesCount * 2).map((game) => (
              <div
                key={game.id}
                className="game-thumb"
                onClick={() => router.push(`/${game.id}`)}
              >
                <img src={game.image} alt={game.name} />
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
