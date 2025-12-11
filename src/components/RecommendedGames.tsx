// src/components/RecommendedGames.tsx
"use client";

import { useRouter } from "next/navigation";
import { Game, gamesArray } from "../data/games-data";

interface RecommendedGamesProps {
  currentGame?: Game;
  maxGames?: number;
}

export function RecommendedGames({ currentGame, maxGames = 48 }: RecommendedGamesProps) {
  const router = useRouter();

  // 获取推荐游戏逻辑
  const getRecommendedGames = (): Game[] => {
    let recommendedGames = [...gamesArray];

    // 如果有当前游戏，排除它
    if (currentGame) {
      recommendedGames = recommendedGames.filter(game => game.id !== currentGame.id);
    }

    // 如果有当前游戏，优先推荐相同标签的游戏
    if (currentGame) {
      const sameTagGames = recommendedGames.filter(game => 
        game.tags.some(tag => currentGame.tags.includes(tag))
      );
      const otherGames = recommendedGames.filter(game => 
        !game.tags.some(tag => currentGame.tags.includes(tag))
      );
      
      // 混合推荐：70%相同标签，30%其他游戏
      const sameTagCount = Math.floor(maxGames * 0.7);
      const otherCount = maxGames - sameTagCount;
      
      recommendedGames = [
        ...sameTagGames.slice(0, sameTagCount),
        ...otherGames.slice(0, otherCount)
      ];
    }

    // 随机打乱顺序
    for (let i = recommendedGames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recommendedGames[i], recommendedGames[j]] = [recommendedGames[j], recommendedGames[i]];
    }

    return recommendedGames.slice(0, maxGames);
  };

  const recommendedGames = getRecommendedGames();

  const handleGameClick = (game: Game) => {
    router.push(`/${game.id}`);
  };

  return (
    <div className="recommended-games">
      <div className="recommended-header">
        <h3>Recommend For You</h3>
      </div>
      
      <div className="recommended-grid">
        {recommendedGames.map((game) => (
          <div
            key={game.id}
            className="recommended-game-card"
            onClick={() => handleGameClick(game)}
            title={game.name}
          >
            <div className="recommended-game-image">
              <img src={game.image} alt={game.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}