// src/app/[id]/GamePageClient.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { gamesArray, Game } from "../../data/games-data";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CommentsSection } from "../../components/CommentsSection";
import { RecommendedGames } from "../../components/RecommendedGames";
import { defaultGameConfig } from "../../config/site";

type Props = {
  game: Game;
};

export default function GamePageClient({ game }: Props) {
  const router = useRouter();

  // 侧边栏游戏数量 - 左右各6个
  const sidebarGamesCount = 6;

  return (
    <div className="container">
      <Header />

      <main className="main-content">
        {/* 左侧 - 游戏缩略图 */}
        <aside className="sidebar-left">
          <div className="game-grid">
            {gamesArray.filter(g => g.id !== game.id).slice(0, sidebarGamesCount).map((g) => (
              <div
                key={g.id}
                className="game-thumb"
                onClick={() => router.push(`/${g.id}`)}
              >
                <img src={g.image} alt={g.name} />
              </div>
            ))}
          </div>
        </aside>

        {/* 中间 - 主游戏区 */}
        <section className="game-area">
          {/* 顶部广告位 */}
          <div className="ad-banner-top">
            {/* Ad code here */}
          </div>

          {/* 游戏标题 / 评分区域 */}
          <div className="game-header">
            <h1 className="game-title">{game.title}</h1>
            <div className="game-meta">
              <span>⭐ {game.rating.toFixed(1)}</span>
              <span>{game.votes.toLocaleString()} votes</span>
              <span>{game.plays.toLocaleString()} plays</span>
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
                src={game.iframeUrl}
                title={game.name}
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
                    <strong>Developer:</strong> {game.developer}
                  </li>
                  <li>
                    <strong>Released:</strong> {game.released}
                  </li>
                  <li>
                    <strong>Technology:</strong> {game.technology}
                  </li>
                </ul>
              </div>

              {/* 标签区域 */}
              <div className="tags-section">
                <h3>Tags</h3>
                <div className="tag-list">
                  {game.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 游戏描述 */}
              <div className="description-section">
                <h2>About {game.name}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: game.description,
                  }}
                />
              </div>

              {/* 评论区 */}
              <div className="comments-in-seo">
                <CommentsSection game={game} />
              </div>
            </div>

            {/* 推荐游戏区域 */}
            <aside className="recommended-section">
              <RecommendedGames currentGame={game} />
            </aside>
          </div>
        </section>

        {/* 右侧 - 更多游戏推荐 */}
        <aside className="sidebar-right">
          <div className="game-grid-right">
            {gamesArray.filter(g => g.id !== game.id).slice(sidebarGamesCount, sidebarGamesCount * 2).map((g) => (
              <div
                key={g.id}
                className="game-thumb"
                onClick={() => router.push(`/${g.id}`)}
              >
                <img src={g.image} alt={g.name} />
              </div>
            ))}
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}