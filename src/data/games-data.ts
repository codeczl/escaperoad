// src/data/games-data.ts
export type Comment = {
  id: number;
  author: string;
  time: string;
  text: string;
  likes: number;
  dislikes: number;
  replies?: Comment[];
};

export type Game = {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  votes: number;
  plays: number;
  developer: string;
  released: string;
  technology: string;
  tags: string[];
  description: string;
  metaDescription: string;
  iframeUrl: string;
  comments?: Comment[];
};

export const gamesData: Record<string, Game> = {
  // 主要特色游戏 - Escape Road
  escaperoad: {
    id: "escaperoad",
    name: "Escape Road",
    title: "Escape Road – Ultimate Traffic Dodging Car Game Online",
    image: "/images/games/escaperoad.png",
    rating: 4.2,
    votes: 2847,
    plays: 1567890,
    developer: "AZ Games",
    released: "March 5, 2025",
    technology: "HTML5",
    tags: ["Car Games", "Racing Games", "Avoid Games", "Traffic Games", "Driving Games", "Escape Games", "Casual Games", "Browser Games", "Free Games", "Online Racing"],
    description:
      "<h2>Escape Road – The Ultimate Traffic Dodging Car Racing Experience</h2><p><strong>Escape Road</strong> is the most exciting car racing game where you escape through endless traffic in this thrilling avoid game. Play Escape Road online free and experience the ultimate car game adventure as you dodge traffic, avoid obstacles, and race through busy highways in this addictive racing game.</p><h3>How to Play Escape Road Online</h3><p>Playing Escape Road is simple but mastering this car game takes skill. Use your keyboard arrows or WASD keys to control your car and escape the traffic. In this avoid game, timing is everything - dodge cars, avoid trucks, and escape through gaps in traffic while racing at high speed. The Escape Road game challenges you to maintain speed while avoiding collisions in this intense car racing experience.</p><h3>Escape Road Game Features</h3><ul><li><strong>Endless Traffic Racing:</strong> Navigate through never-ending streams of vehicles in this car game</li><li><strong>Progressive Car Racing Difficulty:</strong> Speed increases as you advance further in Escape Road</li><li><strong>Multiple Vehicle Types:</strong> Dodge cars, avoid trucks, escape buses, and racing emergency vehicles</li><li><strong>High Score Racing System:</strong> Compete for the highest distance in this avoid game</li><li><strong>Smooth Car Controls:</strong> Responsive steering for precise car racing maneuvering</li><li><strong>Free Online Racing:</strong> Play Escape Road free in your browser without downloads</li></ul><h3>Escape Road Racing Tips for Success</h3><p>Master this car game by staying calm under pressure and planning your escape route ahead. Look for gaps in traffic and time your lane changes carefully in this avoid game. The key to achieving high scores in Escape Road racing is maintaining a steady rhythm while dodging traffic and avoiding obstacles. Practice your car racing skills to escape further distances and beat other players in this competitive racing game.</p><h3>Why Play Escape Road Car Game?</h3><p>Escape Road combines simple car racing mechanics with challenging avoid game gameplay, making it the perfect racing game for quick gaming sessions or extended play. This car game keeps you engaged with increasing difficulty, while the straightforward controls make Escape Road accessible to all racing game enthusiasts. Whether you're new to car games or a racing game veteran, Escape Road offers endless entertainment.</p><h3>Escape Road - Best Free Car Racing Game</h3><p>Join millions of players who love this avoid game! Challenge yourself to beat your personal best in Escape Road and see how far you can race through traffic. This car game offers unlimited replay value as you compete to escape further distances. Play Escape Road now and experience the thrill of high-speed car racing combined with strategic traffic dodging in this ultimate avoid game adventure!</p>",
    metaDescription:
      "Play Escape Road car racing game online free! Dodge traffic, avoid obstacles, escape through endless cars in this thrilling racing game. Master the ultimate car game and see how far you can race!",
    iframeUrl: "https://azgames.io/game/escape-road/",
    comments: [
      {
        id: 1,
        author: "SpeedRacer",
        time: "2 days ago",
        text: "Amazing game! The traffic gets so intense after a while. My best is 2.5km so far.",
        likes: 15,
        dislikes: 1,
      },
      {
        id: 2,
        author: "CarLover88",
        time: "1 week ago",
        text: "Simple but addictive. Perfect for quick breaks at work!",
        likes: 23,
        dislikes: 3,
      },
      {
        id: 3,
        author: "TrafficDodger",
        time: "2 weeks ago",
        text: "Love the increasing difficulty. Gets my heart racing every time!",
        likes: 18,
        dislikes: 2,
        replies: [
          {
            id: 31,
            author: "RoadRunner",
            time: "1 week ago",
            text: "Same here! The adrenaline rush is real when you're weaving through traffic at high speed.",
            likes: 7,
            dislikes: 0,
          },
        ],
      },
    ],
  },

  // FPS射击游戏
  veck: {
    id: "veck",
    name: "Veck",
    title: "Veck – Fast-Paced FPS Shooter Online",
    image: "/images/games/veck.png",
    rating: 4.4,
    votes: 3567,
    plays: 1234567,
    developer: "Veck.io",
    released: "December 10, 2025",
    technology: "HTML5",
    tags: ["FPS Games", "Shooter Games", "Multiplayer Games", "Action Games"],
    description:
      "<h2>Veck – Fast-Paced FPS Shooter</h2><p><strong>Veck</strong> is an intense browser-based FPS game that delivers competitive multiplayer action without requiring any downloads. Jump into fast-paced matches with players from around the world in this tactical shooter experience.</p><h3>Game Features</h3><ul><li><strong>Multiplayer Combat:</strong> Real-time battles with players worldwide</li><li><strong>Multiple Weapons:</strong> Choose from various firearms and equipment</li><li><strong>Different Maps:</strong> Fight across diverse battlegrounds</li><li><strong>Competitive Modes:</strong> Team-based and individual gameplay options</li><li><strong>Browser-Based:</strong> No downloads required, play instantly</li></ul><h3>How to Play Veck</h3><p>Use WASD keys to move, mouse to aim and shoot. Master the art of positioning, timing, and teamwork to dominate the battlefield. Each match tests your reflexes and strategic thinking.</p><h3>Tips for Success</h3><p>Stay aware of your surroundings, communicate with teammates, and practice your aim. Learning the maps and weapon characteristics will give you a significant advantage in combat.</p><p>Experience the thrill of competitive FPS gaming directly in your browser with Veck!</p>",
    metaDescription:
      "Play Veck online free. Fast-paced FPS shooter with competitive multiplayer action. Learn how to play, weapons guide, maps overview. No download required!",
    iframeUrl: "https://veck.io/",
    comments: [
      {
        id: 1,
        author: "rozr",
        time: "5 day ago",
        text: "I love this Game so much cool and it is very Great to steal",
        likes: 2,
        dislikes: 0,
      },
      {
        id: 2,
        author: "Kameron",
        time: "2 week ago",
        text: "I LOVE THIS GAME SO MUCH ITS TO ADICTIVE",
        likes: 18,
        dislikes: 6,
      },
      {
        id: 3,
        author: "Angelathequeenbee",
        time: "4 week ago",
        text: "play this game every time and day!!!!!",
        likes: 21,
        dislikes: 14,
        replies: [
          {
            id: 31,
            author: "james",
            time: "3 week ago",
            text: "ya play this game every day",
            likes: 0,
            dislikes: 0,
          }
        ]
      },
      {
        id: 4,
        author: "Zlata",
        time: "4 week ago",
        text: "This is so good to play at school omg SLAY",
        likes: 28,
        dislikes: 12,
      },
      {
        id: 5,
        author: "me",
        time: "1 month ago",
        text: "this is the best game at school 67",
        likes: 39,
        dislikes: 14,
      },
    ],
  },

  bloodmoney: {
    id: "bloodmoney",
    name: "Blood Money",
    title: "Blood Money – Top-Down Action Shooter",
    image: "/images/games/bloodmoney.png",
    rating: 4.2,
    votes: 1932,
    plays: 604321,
    developer: "Bloodmoney Game",
    released: "October 25, 2024",
    technology: "HTML5",
    tags: ["Action Games", "Shooter Games", "Top-Down Games"],
    description:
      "<strong>Blood Money</strong> is a top-down shooter where every bullet counts. Clear rooms, upgrade your gear, and survive waves of enemies.",
    metaDescription:
      "Play Blood Money online. Clear rooms, upgrade weapons, and survive in this top-down shooter game.",
    iframeUrl: "https://bloodmoneygame.github.io/game/bloodmoney/",
    comments: [
      {
        id: 1,
        author: "ActionHero",
        time: "3 hours ago",
        text: "The upgrade system is really well done. Each weapon feels unique and powerful!",
        likes: 19,
        dislikes: 2,
      },
      {
        id: 2,
        author: "TopDownFan",
        time: "8 hours ago",
        text: "Challenging but fair. Love the strategic element of choosing which rooms to clear first.",
        likes: 22,
        dislikes: 1,
      },
      {
        id: 3,
        author: "GamerGirl99",
        time: "1 day ago",
        text: "Super addictive! Can't stop playing. The difficulty curve is perfect.",
        likes: 27,
        dislikes: 3,
      },
    ],
  },

  "rocket-fortress": {
    id: "rocket-fortress",
    name: "Rocket Fortress",
    title: "Rocket Fortress – Defend with Rockets Online",
    image: "/images/games/rocket-fortress.png",
    rating: 4.1,
    votes: 1890,
    plays: 589321,
    developer: "AZ Games",
    released: "January 28, 2025",
    technology: "HTML5",
    tags: ["Shooting Games", "Defense Games", "Action Games"],
    description:
      "<strong>Rocket Fortress</strong> puts you in charge of a rocket base. Aim, shoot, and defend your fortress from incoming enemies.",
    metaDescription:
      "Play Rocket Fortress online. Defend your base with rockets and stop waves of enemies.",
    iframeUrl: "https://azgames.io/rocket-fortress",
  },

  // 棒球游戏
  "doodle-baseball": {
    id: "doodle-baseball",
    name: "Doodle Baseball",
    title: "Doodle Baseball – Google Doodle Sports Game Online Free",
    image: "/images/games/doodle-baseball.png",
    rating: 4.7,
    votes: 4987,
    plays: 2098765,
    developer: "Google Doodle / 1Games",
    released: "June 1, 2024",
    technology: "HTML5",
    tags: ["Baseball Games", "Sports Games", "Doodle Games", "Google Games"],
    description:
      "Play <strong>Doodle Baseball</strong> online for free! This is the classic Google Doodle baseball game where you step up to the plate and try to hit as many home runs as possible. Perfect your swing timing and become a baseball champion in this addictive sports game.",
    metaDescription:
      "Play Doodle Baseball online free. Swing the bat and hit home runs in this classic Google Doodle baseball game. No download required!",
    iframeUrl: "https://1games.io/game/doodle-baseball",
    comments: [
      {
        id: 1,
        author: "BaseballFan",
        time: "1 hour ago",
        text: "Classic Google Doodle game! Brings back so many memories. The timing mechanic is perfect!",
        likes: 42,
        dislikes: 3,
      },
      {
        id: 2,
        author: "HomeRunKing",
        time: "3 hours ago",
        text: "Addictive gameplay! Just hit my 50th home run. Can't stop playing!",
        likes: 35,
        dislikes: 2,
      },
      {
        id: 3,
        author: "RetroGamer",
        time: "6 hours ago",
        text: "Simple but fun. Perfect for a quick break. Love the cute graphics!",
        likes: 28,
        dislikes: 1,
      },
      {
        id: 4,
        author: "SportsLover",
        time: "1 day ago",
        text: "Best baseball game I've played in a browser. Easy to learn, hard to master!",
        likes: 31,
        dislikes: 4,
      },
      {
        id: 5,
        author: "DoodleFan",
        time: "2 days ago",
        text: "Google Doodle games never disappoint! This one is a home run! 😄",
        likes: 26,
        dislikes: 2,
      },
    ],
  },

  "baseball-bros": {
    id: "baseball-bros",
    name: "Baseball Bros",
    title: "Baseball Bros – Hit Home Runs with Friends Online",
    image: "/images/games/baseball-bros.png",
    rating: 4.1,
    votes: 1780,
    plays: 512340,
    developer: "BaseballBros.io",
    released: "May 3, 2025",
    technology: "HTML5",
    tags: ["Baseball Games", "Sports Games", "Multiplayer Games", "Action Games"],
    description:
      "Play <strong>Baseball Bros</strong> and step up to the plate to swing for the fences. Time your hits perfectly and score massive home runs in this exciting baseball game.",
    metaDescription:
      "Play Baseball Bros online. Time your swing and hit home runs in this fun multiplayer baseball game.",
    iframeUrl: "https://baseballbros.io",
  },

  "steal-a-brainrot": {
    id: "steal-a-brainrot",
    name: "Steal A Brainrot",
    title: "Steal Brainrot – Play the Meme Heist Game Online",
    image: "/images/games/steal-a-brainrot.png",
    rating: 4.1,
    votes: 1818,
    plays: 667939,
    developer: "Brazilian Spyder",
    released: "May 16, 2025",
    technology: "HTML5",
    tags: ["Roblox Games", "Meme Games", "Brainrot Games", "Casual Games"],
    description:
      "Play <strong>Steal A Brainrot</strong> now and sneak into heavily guarded meme bases to steal rare Brainrot units. Upgrade your gear, outsmart defenses, and see how much chaos you can cause.",
    metaDescription:
      "Play Steal Brainrot online in your browser. Infiltrate meme vaults, steal Brainrot units, and upgrade your heist gear in this chaotic meme game.",
    iframeUrl:
      "https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/",
  },

  driftboss: {
    id: "driftboss",
    name: "Drift Boss",
    title: "Drift Boss – One-Button Drifting Online",
    image: "/images/games/driftboss.png",
    rating: 4.3,
    votes: 2567,
    plays: 789012,
    developer: "Hooda Math",
    released: "January 8, 2025",
    technology: "HTML5",
    tags: ["Car Games", "Drifting Games", "One-Button Games"],
    description:
      "<strong>Drift Boss</strong> is a simple yet addictive drifting game. Tap or click at the right time to drift through corners without falling off the track.",
    metaDescription:
      "Play Drift Boss online. Tap to drift, stay on the track, and master tight corners in this addictive one-button drifting game.",
    iframeUrl:
      "https://www.hoodamath.com/mobile/games/drift-boss/game.html",
  },

  retrobow: {
    id: "retrobow",
    name: "Retro Bowl",
    title: "Retro Bowl – Classic American Football Manager",
    image: "/images/games/retrobow.png",
    rating: 4.8,
    votes: 5432,
    plays: 2345678,
    developer: "New Star Games",
    released: "February 2, 2025",
    technology: "HTML5",
    tags: ["Sports Games", "Football Games", "Management Games"],
    description:
      "<strong>Retro Bowl</strong> lets you manage your own American football team. Draft players, call plays, and lead your squad to glory in a retro pixel style.",
    metaDescription:
      "Play Retro Bowl online. Manage your team, call plays, and win championships in this retro-style American football game.",
    iframeUrl:
      "https://game316009.konggames.com/gamez/0031/6009/live/index.html",
  },

  "geometry-dash": {
    id: "geometry-dash",
    name: "Geometry Dash",
    title: "Geometry Dash – Rhythm-Based Platformer",
    image: "/images/games/geometrydash.png",
    rating: 4.5,
    votes: 4211,
    plays: 1678900,
    developer: "RobTop Games",
    released: "January 20, 2025",
    technology: "HTML5",
    tags: ["Platform Games", "Rhythm Games", "Hard Games"],
    description:
      "<strong>Geometry Dash</strong> is a fast-paced rhythm platformer. Jump over spikes, fly through portals, and sync your moves to the music to survive each level.",
    metaDescription:
      "Play Geometry Dash online. Jump, fly, and dodge obstacles in this fast-paced rhythm-based action platformer.",
    iframeUrl: "https://1games.io/game/dashmetry/",
  },

  slope: {
    id: "slope",
    name: "Slope Ball",
    title: "Slope Ball – Roll Down the Neon Track",
    image: "/images/games/slope.png",
    rating: 4.4,
    votes: 3987,
    plays: 1456789,
    developer: "Y8 / 1Games",
    released: "November 12, 2024",
    technology: "HTML5",
    tags: ["Ball Games", "3D Games", "Reaction Games"],
    description:
      "<strong>Slope Ball</strong> sends you rolling down a neon slope filled with gaps and obstacles. Control the ball, react quickly, and survive as long as you can.",
    metaDescription:
      "Play Slope Ball online. Control a rolling ball on a neon slope and avoid falling in this fast reaction 3D game.",
    iframeUrl: "https://1games.io/game/slope-ball/",
  },

  slope2: {
    id: "slope2",
    name: "Slope 2",
    title: "Slope 2 – Even Faster 3D Slope Challenge",
    image: "/images/games/slope2.png",
    rating: 4.2,
    votes: 2876,
    plays: 987654,
    developer: "2Games",
    released: "December 3, 2024",
    technology: "HTML5",
    tags: ["Ball Games", "3D Games", "Endless Games"],
    description:
      "<strong>Slope 2</strong> is the sequel to the classic slope runner. Roll down an endless 3D track, avoid obstacles, and beat your high score.",
    metaDescription:
      "Play Slope 2 online. Roll down a fast 3D track, avoid obstacles, and try to beat your best score.",
    iframeUrl: "https://2games.io/game/slope-2/",
  },

  "mad-drive": {
    id: "mad-drive",
    name: "Drive Mad",
    title: "Drive Mad – Physics Truck Stunt Game",
    image: "/images/games/drivemad.png",
    rating: 4.6,
    votes: 4321,
    plays: 1897654,
    developer: "3kh0 / Gamecollections",
    released: "October 10, 2024",
    technology: "HTML5",
    tags: ["Car Games", "Physics Games", "Stunt Games"],
    description:
      "<strong>Drive Mad</strong> is a physics-based truck game where one wrong move can flip your vehicle. Balance, accelerate carefully, and complete tricky stunt levels.",
    metaDescription:
      "Play Drive Mad online. Drive a shaky truck over crazy tracks and keep your balance in this physics stunt game.",
    iframeUrl:
      "https://gamecollections.me/game/3kh0-assets-main/drive-mad/",
  },

  leveldevil: {
    id: "leveldevil",
    name: "Level Devil",
    title: "Level Devil – Troll Platformer Challenge",
    image: "/images/games/leveldevil.png",
    rating: 4.1,
    votes: 2413,
    plays: 765432,
    developer: "Owner / Gamecollections",
    released: "September 15, 2024",
    technology: "HTML5",
    tags: ["Platform Games", "Troll Games", "Hard Games"],
    description:
      "<strong>Level Devil</strong> looks like a normal platformer until the level trolls you. Hidden spikes, fake floors, and jumps that aren’t what they seem.",
    metaDescription:
      "Play Level Devil online. Try to clear troll platformer levels full of traps, fake floors, and evil surprises.",
    iframeUrl: "https://gamecollections.me/game/owner/level-devil/",
  },

  "slope-rider": {
    id: "slope-rider",
    name: "Slope Rider",
    title: "Slope Rider – Snowboard Down the Neon Slopes",
    image: "/images/games/slope-rider.png",
    rating: 4.0,
    votes: 1799,
    plays: 543210,
    developer: "AZ Game",
    released: "February 10, 2025",
    technology: "HTML5",
    tags: ["Snowboard Games", "3D Games", "Slope Games"],
    description:
      "<strong>Slope Rider</strong> combines slope gameplay with snowboarding. Ride down neon tracks, jump over gaps, and pull off smooth landings.",
    metaDescription:
      "Play Slope Rider online. Snowboard down neon slopes, avoid obstacles, and chase high scores.",
    iframeUrl: "https://game.azgame.io/slope-rider",
  },

  "golf-hit": {
    id: "golf-hit",
    name: "Golf Hit",
    title: "Golf Hit – Casual One-Shot Golf Game",
    image: "/images/games/golfhit.png",
    rating: 3.9,
    votes: 1320,
    plays: 398765,
    developer: "AZ Game",
    released: "March 22, 2025",
    technology: "HTML5",
    tags: ["Golf Games", "Sports Games", "Casual Games"],
    description:
      "<strong>Golf Hit</strong> is a simple one-shot golf game. Aim your shot, adjust the power, and try to land the ball perfectly in the hole.",
    metaDescription:
      "Play Golf Hit online. Aim, shoot, and try to sink the ball in this casual golf game.",
    iframeUrl: "https://game.azgame.io/golf-hit/",
  },

  "wacky-flip": {
    id: "wacky-flip",
    name: "Wacky Flip",
    title: "Wacky Flip – Crazy Flip Challenge",
    image: "/images/games/wackyflip.png",
    rating: 4.0,
    votes: 1540,
    plays: 467890,
    developer: "AZ Game",
    released: "April 1, 2025",
    technology: "HTML5",
    tags: ["Arcade Games", "Flip Games", "Casual Games"],
    description:
      "<strong>Wacky Flip</strong> challenges you to flip characters or objects in ridiculous ways. Time your jumps and flips to land perfectly.",
    metaDescription:
      "Play Wacky Flip online. Perform crazy flips and try to land perfectly in this fun arcade game.",
    iframeUrl: "https://game.azgame.io/wacky-flip",
  },

  "snow-rider": {
    id: "snow-rider",
    name: "Snow Rider 3D",
    title: "Snow Rider 3D – Sleigh Down the Snowy Hills",
    image: "/images/games/snow-rider.png",
    rating: 4.5,
    votes: 3765,
    plays: 1678901,
    developer: "Vijay Singh",
    released: "December 18, 2024",
    technology: "HTML5",
    tags: ["Snow Games", "3D Games", "Racing Games"],
    description:
      "<strong>Snow Rider 3D</strong> lets you slide down snowy hills on a sleigh. Dodge trees, jump over obstacles, and collect gifts.",
    metaDescription:
      "Play Snow Rider 3D online. Ride your sleigh down snowy hills, avoid obstacles, and collect presents.",
    iframeUrl: "https://itsvijaysingh.github.io/Snow-Rider3D/",
  },

  "space-waves": {
    id: "space-waves",
    name: "Space Waves",
    title: "Space Waves – Neon Rhythm Runner",
    image: "/images/games/space-waves.png",
    rating: 4.2,
    votes: 2109,
    plays: 654321,
    developer: "Space Waves Game",
    released: "November 30, 2024",
    technology: "HTML5",
    tags: ["Rhythm Games", "Arcade Games", "Space Games"],
    description:
      "<strong>Space Waves</strong> is a neon rhythm runner. Ride the wave, avoid obstacles, and sync your movement to the music.",
    metaDescription:
      "Play Space Waves online. Ride neon waves, dodge obstacles, and enjoy a rhythmic arcade experience.",
    iframeUrl: "https://spacewavesgame.io/game/space-waves/",
  },



  "football-bros": {
    id: "football-bros",
    name: "Football Bros",
    title: "Football Bros – Online Football Fun",
    image: "/images/games/football-bros.png",
    rating: 4.0,
    votes: 1654,
    plays: 478900,
    developer: "FootballBros.io",
    released: "May 12, 2025",
    technology: "HTML5",
    tags: ["Football Games", "Sports Games", "Multiplayer Games"],
    description:
      "<strong>Football Bros</strong> is a casual online football game. Pass, shoot, and score with simple arcade-style controls.",
    metaDescription:
      "Play Football Bros online. Pass, shoot, and score goals in this casual football game.",
    iframeUrl: "https://footballbros.io/",
  },

  "stickman-hook": {
    id: "stickman-hook",
    name: "Stickman Hook",
    title: "Stickman Hook – Swing Through the Levels",
    image: "/images/games/stickman-hook.png",
    rating: 4.3,
    votes: 3210,
    plays: 1432567,
    developer: "Madbox / 3kh0",
    released: "August 8, 2024",
    technology: "HTML5",
    tags: ["Stickman Games", "Physics Games", "Arcade Games"],
    description:
      "<strong>Stickman Hook</strong> lets you swing from hook to hook using physics. Time your release to fly through levels without falling.",
    metaDescription:
      "Play Stickman Hook online. Swing through levels using physics and try not to fall.",
    iframeUrl:
      "https://gamecollections.me/game/3kh0-assets-main/stickman-hook/",
  },

  "ragdoll-archers": {
    id: "ragdoll-archers",
    name: "Ragdoll Archers",
    title: "Ragdoll Archers – Wobbly Archery Battles",
    image: "/images/games/ragdoll-archers.png",
    rating: 4.1,
    votes: 2045,
    plays: 589765,
    developer: "Bitlife Online",
    released: "July 19, 2024",
    technology: "HTML5",
    tags: ["Archery Games", "Ragdoll Games", "Two-Player Games"],
    description:
      "<strong>Ragdoll Archers</strong> features wobbly archers trying to hit each other with arrows. Aim carefully while your character flops around.",
    metaDescription:
      "Play Ragdoll Archers online. Control a ragdoll archer and try to hit your opponent with arrows.",
    iframeUrl: "https://bitlifeonline.github.io/ragdoll-archers/",
  },


};

export const gamesArray: Game[] = Object.values(gamesData);

export function getGameById(id: string): Game | undefined {
  return gamesData[id];
}
