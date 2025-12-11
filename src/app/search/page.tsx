// src/app/search/page.tsx
"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { gamesArray } from "../../data/games-data";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { defaultGameConfig } from "../../config/site";

// 动态设置页面标题
function usePageTitle(query: string) {
  React.useEffect(() => {
    if (query) {
      document.title = `Search Results for "${query}" - STEAL BRAINROT`;
      
      // 更新meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Find games related to "${query}". Browse our collection of free online games.`);
      }
    }
  }, [query]);
}

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // 动态设置页面SEO
  usePageTitle(query);

  // 根据搜索关键词过滤游戏
  const searchResults = query 
    ? gamesArray.filter((game) => {
        const searchLower = query.toLowerCase();
        return (
          game.name.toLowerCase().includes(searchLower) ||
          game.title.toLowerCase().includes(searchLower) ||
          game.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          game.description.toLowerCase().includes(searchLower)
        );
      })
    : [];

  return (
    <div className="container">
      <Header />

      <main className="main-content">
        {/* 左侧 - 游戏缩略图 */}
        <aside className="sidebar-left">
          <div className="game-grid">
            {gamesArray.slice(0, defaultGameConfig.sidebarGamesCount).map((game) => (
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

        {/* 中间 - 搜索结果区 */}
        <section className="game-area">
          {/* 搜索结果标题 */}
          <div className="search-header">
            <h1 className="search-title">
              Search Results for "{query}"
            </h1>
            <p className="search-count">
              Found {searchResults.length} game{searchResults.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* 搜索结果网格 */}
          <div className="search-results-grid">
            {searchResults.length > 0 ? (
              searchResults.map((game) => (
                <div
                  key={game.id}
                  className="search-result-item"
                  onClick={() => router.push(`/${game.id}`)}
                >
                  <img src={game.image} alt={game.name} />
                  <div className="search-result-info">
                    <h3 className="search-result-title">{game.name}</h3>
                    <div className="search-result-meta">
                      <span>⭐ {game.rating.toFixed(1)}</span>
                      <span>{game.plays.toLocaleString()} plays</span>
                    </div>
                    <div className="search-result-tags">
                      {game.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="search-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-search-results">
                <h3>No games found</h3>
                <p>Try searching for different keywords like:</p>
                <ul>
                  <li>slope, drift, football, baseball</li>
                  <li>car games, sports games, arcade games</li>
                  <li>3D, HTML5, action, casual</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* 右侧 - 更多游戏推荐 */}
        <aside className="sidebar-right">
          <div className="game-grid-right">
            {gamesArray.slice(defaultGameConfig.sidebarGamesCount, defaultGameConfig.sidebarGamesCount * 2).map((game) => (
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

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container">
        <Header />
        <main className="main-content">
          <div className="game-area">
            <div className="search-header">
              <h1 className="search-title">Loading search results...</h1>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}