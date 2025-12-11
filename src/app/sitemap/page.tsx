// src/app/sitemap/page.tsx
import Link from "next/link";
import { gamesArray } from "../../data/games-data";
import { siteConfig } from "../../config/site";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const metadata = {
  title: `Site Map - ${siteConfig.name}`,
  description: `Complete site map of ${siteConfig.name}. Find all car games, racing games, and other online games available on our platform.`,
  keywords: "sitemap, site map, escape road games, car games list, racing games directory, all games"
};

export default function SitemapPage() {
  // 按类别分组游戏
  const gamesByCategory = {
    "Car & Racing Games": gamesArray.filter(game => 
      game.tags.some(tag => 
        tag.toLowerCase().includes('car') || 
        tag.toLowerCase().includes('racing') || 
        tag.toLowerCase().includes('driving')
      )
    ),
    "Action & Shooter Games": gamesArray.filter(game => 
      game.tags.some(tag => 
        tag.toLowerCase().includes('fps') || 
        tag.toLowerCase().includes('shooter') || 
        tag.toLowerCase().includes('action')
      )
    ),
    "Sports Games": gamesArray.filter(game => 
      game.tags.some(tag => 
        tag.toLowerCase().includes('sports') || 
        tag.toLowerCase().includes('baseball') || 
        tag.toLowerCase().includes('football') || 
        tag.toLowerCase().includes('golf') ||
        tag.toLowerCase().includes('archery')
      )
    ),
    "Platform & Puzzle Games": gamesArray.filter(game => 
      game.tags.some(tag => 
        tag.toLowerCase().includes('platform') || 
        tag.toLowerCase().includes('puzzle') || 
        tag.toLowerCase().includes('geometry') ||
        tag.toLowerCase().includes('slope')
      )
    ),
    "Casual Games": gamesArray.filter(game => 
      game.tags.some(tag => 
        tag.toLowerCase().includes('casual') || 
        tag.toLowerCase().includes('avoid') ||
        tag.toLowerCase().includes('flip')
      )
    )
  };

  return (
    <div className="container">
      <Header />
      
      <main className="static-page-content">
        <div className="content-container">
          <h1>Site Map - {siteConfig.name}</h1>
          
          <div className="content-box-dark">
            <p>
              Welcome to the complete site map of {siteConfig.name}. Here you can find all our 
              car racing games, avoid games, and other exciting online games organized by category.
            </p>

            {/* 主要页面 */}
            <h2>Main Pages</h2>
            <ul>
              <li><Link href="/">🏠 Home - Play Escape Road Online</Link></li>
              <li><Link href="/search">🔍 Search Games</Link></li>
              <li><Link href="/about">ℹ️ About Us</Link></li>
              <li><Link href="/contact">📧 Contact</Link></li>
            </ul>

            {/* 特色游戏 */}
            <h2>🌟 Featured Game</h2>
            <ul>
              <li>
                <Link href="/escaperoad">
                  🚗 <strong>Escape Road</strong> - Ultimate Traffic Dodging Car Racing Game
                </Link>
              </li>
            </ul>

            {/* 按类别显示游戏 */}
            {Object.entries(gamesByCategory).map(([category, games]) => (
              games.length > 0 && (
                <div key={category}>
                  <h2>🎮 {category} ({games.length} games)</h2>
                  <ul>
                    {games.map((game) => (
                      <li key={game.id}>
                        <Link href={`/${game.id}`}>
                          {game.name} - {game.title.split(' – ')[1] || game.title}
                        </Link>
                        <span style={{ color: '#aaa', fontSize: '14px', marginLeft: '10px' }}>
                          ⭐ {game.rating} | 🎯 {game.plays.toLocaleString()} plays
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}

            {/* 其他游戏 */}
            {(() => {
              const categorizedGameIds = new Set();
              Object.values(gamesByCategory).forEach(games => 
                games.forEach(game => categorizedGameIds.add(game.id))
              );
              const otherGames = gamesArray.filter(game => !categorizedGameIds.has(game.id));
              
              return otherGames.length > 0 && (
                <div>
                  <h2>🎲 Other Games ({otherGames.length} games)</h2>
                  <ul>
                    {otherGames.map((game) => (
                      <li key={game.id}>
                        <Link href={`/${game.id}`}>
                          {game.name} - {game.title.split(' – ')[1] || game.title}
                        </Link>
                        <span style={{ color: '#aaa', fontSize: '14px', marginLeft: '10px' }}>
                          ⭐ {game.rating} | 🎯 {game.plays.toLocaleString()} plays
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* 信息页面 */}
            <h2>📄 Information Pages</h2>
            <ul>
              <li><Link href="/privacy">🔒 Privacy Policy</Link></li>
              <li><Link href="/terms">📋 Terms of Use</Link></li>
              <li><Link href="/copyright">©️ Copyright & DMCA</Link></li>
              <li><Link href="/sitemap">🗺️ Site Map (This Page)</Link></li>
            </ul>

            {/* 游戏统计 */}
            <h2>📊 Game Statistics</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '15px',
              margin: '20px 0'
            }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px' }}>
                <strong>Total Games:</strong> {gamesArray.length}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px' }}>
                <strong>Car Games:</strong> {gamesByCategory["Car & Racing Games"].length}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px' }}>
                <strong>Action Games:</strong> {gamesByCategory["Action & Shooter Games"].length}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px' }}>
                <strong>Sports Games:</strong> {gamesByCategory["Sports Games"].length}
              </div>
            </div>

            {/* SEO信息 */}
            <h2>🔍 Popular Game Categories</h2>
            <p>
              <strong>Escape Road Games:</strong> Experience the thrill of traffic dodging in our featured 
              escape road car racing game. Navigate through endless traffic and see how far you can escape!
            </p>
            <p>
              <strong>Car Racing Games:</strong> From drift boss to mad drive, enjoy our collection of 
              exciting car games that test your driving skills and reflexes.
            </p>
            <p>
              <strong>Avoid Games:</strong> Master the art of dodging obstacles in games like Escape Road, 
              where timing and precision are everything.
            </p>
            <p>
              <strong>Free Online Games:</strong> All games on {siteConfig.name} are completely free to play 
              in your browser. No downloads required!
            </p>

            <div style={{ 
              marginTop: '30px', 
              padding: '20px', 
              background: 'rgba(255,215,0,0.1)', 
              borderRadius: '10px',
              border: '1px solid rgba(255,215,0,0.3)'
            }}>
              <h3>🎯 Quick Navigation Tips</h3>
              <ul>
                <li>Use <strong>Ctrl+F</strong> to search for specific games on this page</li>
                <li>Visit our <Link href="/search" style={{color: '#ffd700'}}>Search Page</Link> to filter games by category</li>
                <li>Bookmark your favorite games for quick access</li>
                <li>All games are mobile-friendly and work on any device</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}