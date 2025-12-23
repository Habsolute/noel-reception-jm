"use client";

import { useEffect, useState } from "react";
import { supabase, Player } from "@/lib/supabase";

export default function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger les joueurs initiaux
    fetchPlayers();

    // S'abonner aux changements en temps réel
    const channel = supabase
      .channel("players-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "players" },
        () => {
          fetchPlayers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchPlayers = async () => {
    const { data, error } = await supabase
      .from("players")
      .select("*")
      .order("score", { ascending: false });

    if (error) {
      console.error("Erreur:", error);
    } else {
      setPlayers(data || []);
    }
    setLoading(false);
  };

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

  if (loading) {
    return (
      <div className="christmas-card rounded-3xl p-8 max-w-md w-full flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <span className="text-6xl animate-bounce">🎅</span>
          <p className="text-white/60 mt-4">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="christmas-card rounded-3xl p-8 max-w-md w-full">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-4xl trophy-bounce">🏆</span>
        <h2 className="font-festive text-3xl text-yellow-400 glow-text">
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
        {players.length === 0 ? (
          <p className="text-white/60 text-center py-8">
            Aucun joueur pour l&apos;instant!
          </p>
        ) : (
          players.map((player, index) => (
            <div
              key={player.id}
              className={`flex items-center gap-4 p-4 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${getMedalStyle(
                index
              )}`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-2xl">
                {getMedalEmoji(index)}
              </div>

              <div className="text-3xl">{player.avatar}</div>

              <div className="flex-1">
                <p className="font-semibold text-white text-lg">
                  {player.name}
                </p>
                <p className="text-white/70 text-sm">Rang #{index + 1}</p>
              </div>

              <div className="text-right">
                <p className="font-bold text-2xl text-yellow-300">
                  {player.score.toLocaleString()}
                </p>
                <p className="text-white/60 text-xs">points</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/50 text-sm italic">
          ✨ Que le meilleur lutin gagne! ✨
        </p>
        <p className="text-white/30 text-xs mt-2">🔴 En direct</p>
      </div>
    </div>
  );
}
