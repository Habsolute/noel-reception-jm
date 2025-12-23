"use client";

import { useState } from "react";

interface Player {
  id: number;
  name: string;
  score: number;
  avatar: string;
}

const initialPlayers: Player[] = [
  { id: 1, name: "Le Père Noël", score: 1250, avatar: "🎅" },
  { id: 2, name: "Rudolph", score: 980, avatar: "🦌" },
  { id: 3, name: "Lutin Joyeux", score: 875, avatar: "🧝" },
  { id: 4, name: "Mère Noël", score: 720, avatar: "🤶" },
  { id: 5, name: "Bonhomme de neige", score: 650, avatar: "⛄" },
  { id: 6, name: "Petit Renne", score: 520, avatar: "🦌" },
  { id: 7, name: "Lutin Farceur", score: 480, avatar: "🧝‍♂️" },
  { id: 8, name: "Flocon", score: 350, avatar: "❄️" },
];

export default function Leaderboard() {
  const [players] = useState<Player[]>(
    [...initialPlayers].sort((a, b) => b.score - a.score)
  );

  const getMedalStyle = (index: number) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/30";
      case 1:
        return "bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg shadow-gray-400/30";
      case 2:
        return "bg-gradient-to-r from-amber-600 to-amber-700 shadow-lg shadow-amber-600/30";
      default:
        return "bg-white/5";
    }
  };

  const getMedalEmoji = (index: number) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return "🎄";
    }
  };

  return (
    <div className="christmas-card rounded-3xl p-8 max-w-md w-full">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-4xl trophy-bounce">🏆</span>
        <h2 className="font-festive text-3xl text-christmas-gold glow-text">
          Leaderboard
        </h2>
        <span
          className="text-4xl trophy-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          🏆
        </span>
      </div>

      <div className="space-y-3">
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`flex items-center gap-4 p-4 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${getMedalStyle(
              index
            )}`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-2xl">
              {getMedalEmoji(index)}
            </div>

            <div className="text-3xl">{player.avatar}</div>

            <div className="flex-1">
              <p className="font-semibold text-white text-lg">{player.name}</p>
              <p className="text-white/70 text-sm">Rang #{index + 1}</p>
            </div>

            <div className="text-right">
              <p className="font-bold text-2xl text-christmas-gold">
                {player.score.toLocaleString()}
              </p>
              <p className="text-white/60 text-xs">points</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/50 text-sm italic">
          ✨ Que le meilleur lutin gagne! ✨
        </p>
      </div>
    </div>
  );
}
