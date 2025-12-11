// src/app/[id]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getGameById, gamesArray } from "../../data/games-data";
import { seoTemplates } from "../../config/site";
import GamePageClient from "./GamePageClient";

type Props = {
  params: Promise<{ id: string }>;
};

// 预生成所有游戏的路径
export function generateStaticParams() {
  return gamesArray.map((game) => ({ id: game.id }));
}

// 动态生成每个游戏页面的SEO信息
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const game = getGameById(id);

  if (!game) {
    return { title: "Game not found" };
  }

  const seo = seoTemplates.game(game.name, game.description);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://steal-brainrot.io/${game.id}`,
      images: [
        {
          url: game.image,
          width: 200,
          height: 200,
          alt: game.name,
        }
      ],
    },
    
    twitter: {
      title: seo.title,
      description: seo.description,
      images: [game.image],
    },
    
    // JSON-LD 结构化数据
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Game",
        "name": game.name,
        "description": game.description.replace(/<[^>]*>/g, ''),
        "image": game.image,
        "author": {
          "@type": "Organization",
          "name": game.developer
        },
        "datePublished": game.released,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": game.rating,
          "ratingCount": game.votes
        },
        "interactionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/PlayAction",
          "userInteractionCount": game.plays
        }
      })
    }
  };
}

export default async function GamePage({ params }: Props) {
  const { id } = await params;
  const game = getGameById(id);

  if (!game) {
    notFound();
  }

  return <GamePageClient game={game} />;
}