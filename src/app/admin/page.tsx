"use client";

import { useEffect, useState } from "react";
import { supabase, Player } from "@/lib/supabase";
import Link from "next/link";

const AVATAR_OPTIONS = [
  "🎅",
  "🤶",
  "🦌",
  "🧝",
  "🧝‍♂️",
  "⛄",
  "🎄",
  "🎁",
  "❄️",
  "🔔",
  "⭐",
  "🍪",
  "🧣",
  "🎿",
  "☃️",
  "🌟",
];

export default function AdminPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("🎅");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [editName, setEditName] = useState("");
  const [editAvatar, setEditAvatar] = useState("");

  useEffect(() => {
    fetchPlayers();

    const channel = supabase
      .channel("admin-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "players" },
        () => fetchPlayers()
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

    if (error) console.error("Erreur:", error);
    else setPlayers(data || []);
    setLoading(false);
  };

  const updateScore = async (id: number, delta: number) => {
    const player = players.find((p) => p.id === id);
    if (!player) return;

    const newScore = Math.max(0, player.score + delta);

    await supabase.from("players").update({ score: newScore }).eq("id", id);
  };

  const setScore = async (id: number, score: number) => {
    await supabase
      .from("players")
      .update({ score: Math.max(0, score) })
      .eq("id", id);
  };

  const addPlayer = async () => {
    if (!newName.trim()) return;

    await supabase
      .from("players")
      .insert({ name: newName.trim(), avatar: newAvatar, score: 0 });

    setNewName("");
    setNewAvatar("🎅");
    setShowAddForm(false);
  };

  const deletePlayer = async (id: number) => {
    if (confirm("Supprimer ce joueur?")) {
      await supabase.from("players").delete().eq("id", id);
    }
  };

  const resetAllScores = async () => {
    if (confirm("Remettre tous les scores à 0?")) {
      await supabase.from("players").update({ score: 0 }).gte("id", 0);
    }
  };

  const startEditing = (player: Player) => {
    setEditingPlayer(player);
    setEditName(player.name);
    setEditAvatar(player.avatar);
  };

  const cancelEditing = () => {
    setEditingPlayer(null);
    setEditName("");
    setEditAvatar("");
  };

  const savePlayer = async () => {
    if (!editingPlayer || !editName.trim()) return;

    await supabase
      .from("players")
      .update({ name: editName.trim(), avatar: editAvatar })
      .eq("id", editingPlayer.id);

    cancelEditing();
  };

  if (loading) {
    return (
      <div className="min-h-screen animated-gradient flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl animate-bounce">🎅</span>
          <p className="text-white/60 mt-4">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen animated-gradient p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-festive text-3xl md:text-4xl text-yellow-400 glow-text">
              🎅 Mode Admin
            </h1>
            <p className="text-white/60 text-sm mt-1">
              Gère les scores en temps réel
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
          >
            ← Retour
          </Link>
        </div>

        {/* Actions rapides */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-full text-white font-semibold transition-all"
          >
            ➕ Ajouter joueur
          </button>
          <button
            onClick={resetAllScores}
            className="px-4 py-2 bg-red-600/50 hover:bg-red-600 rounded-full text-white transition-all"
          >
            🔄 Reset scores
          </button>
        </div>

        {/* Formulaire d'ajout */}
        {showAddForm && (
          <div className="christmas-card rounded-2xl p-6 mb-6">
            <h3 className="text-white font-semibold mb-4">Nouveau joueur</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nom du joueur"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400"
              />
              <div>
                <p className="text-white/60 text-sm mb-2">Choisir un avatar:</p>
                <div className="flex flex-wrap gap-2">
                  {AVATAR_OPTIONS.map((avatar) => (
                    <button
                      key={avatar}
                      onClick={() => setNewAvatar(avatar)}
                      className={`text-3xl p-2 rounded-lg transition-all ${
                        newAvatar === avatar
                          ? "bg-yellow-400/30 scale-110"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addPlayer}
                  className="flex-1 py-3 bg-green-600 hover:bg-green-500 rounded-xl text-white font-semibold transition-all"
                >
                  ✅ Ajouter
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal d'édition */}
        {editingPlayer && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="christmas-card rounded-2xl p-6 max-w-md w-full">
              <h3 className="text-white font-semibold mb-4 text-xl">
                ✏️ Modifier le joueur
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    Nom:
                  </label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Nom du joueur"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-2">Avatar:</p>
                  <div className="flex flex-wrap gap-2">
                    {AVATAR_OPTIONS.map((avatar) => (
                      <button
                        key={avatar}
                        onClick={() => setEditAvatar(avatar)}
                        className={`text-3xl p-2 rounded-lg transition-all ${
                          editAvatar === avatar
                            ? "bg-yellow-400/30 scale-110"
                            : "bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {avatar}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={savePlayer}
                    className="flex-1 py-3 bg-green-600 hover:bg-green-500 rounded-xl text-white font-semibold transition-all"
                  >
                    ✅ Sauvegarder
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Liste des joueurs */}
        <div className="space-y-4">
          {players.map((player, index) => (
            <div
              key={player.id}
              className="christmas-card rounded-2xl p-4 flex items-center gap-4"
            >
              {/* Rang & Avatar */}
              <div className="text-center">
                <span className="text-2xl">{player.avatar}</span>
                <p className="text-white/40 text-xs">#{index + 1}</p>
              </div>

              {/* Nom */}
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate">
                  {player.name}
                </p>
              </div>

              {/* Bouton éditer */}
              <button
                onClick={() => startEditing(player)}
                className="w-10 h-10 bg-blue-600/50 hover:bg-blue-600 rounded-full text-white transition-all shrink-0"
                title="Modifier"
              >
                ✏️
              </button>

              {/* Contrôles de score */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => updateScore(player.id, -10)}
                  className="w-10 h-10 bg-red-600/50 hover:bg-red-600 rounded-full text-white text-xl font-bold transition-all active:scale-90"
                >
                  -
                </button>

                <input
                  type="number"
                  value={player.score}
                  onChange={(e) =>
                    setScore(player.id, parseInt(e.target.value) || 0)
                  }
                  className="w-20 text-center py-2 bg-white/10 border border-white/20 rounded-xl text-yellow-400 font-bold text-lg focus:outline-none focus:border-yellow-400"
                />

                <button
                  onClick={() => updateScore(player.id, 10)}
                  className="w-10 h-10 bg-green-600/50 hover:bg-green-600 rounded-full text-white text-xl font-bold transition-all active:scale-90"
                >
                  +
                </button>
              </div>

              {/* Supprimer */}
              <button
                onClick={() => deletePlayer(player.id)}
                className="w-10 h-10 bg-red-900/50 hover:bg-red-700 rounded-full text-white transition-all shrink-0"
                title="Supprimer"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/40 text-sm">
          <p>Les changements sont sauvegardés automatiquement</p>
          <p className="mt-1">🔴 Synchronisé en temps réel</p>
        </div>
      </div>
    </main>
  );
}
