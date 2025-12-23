"use client";

interface Activity {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

const activities: Activity[] = [
  {
    id: 1,
    time: "18h00",
    title: "Accueil & Cocktails",
    description: "Vin chaud, chocolat chaud et petites bouchées festives",
    icon: "🍷",
  },
  {
    id: 2,
    time: "18h30",
    title: "Échange de cadeaux",
    description: "Le fameux Secret Santa! Apportez votre cadeau emballé",
    icon: "🎁",
    highlight: true,
  },
  {
    id: 3,
    time: "19h30",
    title: "Quiz de Noël",
    description: "Testez vos connaissances sur les traditions de Noël",
    icon: "🎯",
  },
  {
    id: 4,
    time: "20h00",
    title: "Souper festif",
    description: "Dinde, tourtière et tous les classiques!",
    icon: "🦃",
  },
  {
    id: 5,
    time: "21h00",
    title: "Karaoké de Noël",
    description: "Chantez vos chansons de Noël préférées!",
    icon: "🎤",
    highlight: true,
  },
  {
    id: 6,
    time: "22h00",
    title: "Jeux de société",
    description: "Monopoly, Uno, et autres classiques",
    icon: "🎲",
  },
  {
    id: 7,
    time: "23h00",
    title: "Danse & Party",
    description: "La piste de danse est ouverte!",
    icon: "💃",
    highlight: true,
  },
  {
    id: 8,
    time: "00h00",
    title: "Feux d'artifice",
    description: "Célébrons ensemble sous les étoiles!",
    icon: "🎆",
  },
];

export default function Activities() {
  return (
    <div className="christmas-card rounded-3xl p-8 max-w-md w-full">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-4xl animate-bounce">📋</span>
        <h2 className="font-festive text-3xl text-christmas-gold glow-text">
          Programme
        </h2>
        <span
          className="text-4xl animate-bounce"
          style={{ animationDelay: "0.3s" }}
        >
          🎉
        </span>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-green-600 to-yellow-500 rounded-full" />

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="activity-card flex gap-4 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0 ${
                  activity.highlight
                    ? "bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-500/50"
                    : "bg-gradient-to-br from-green-600 to-green-800"
                }`}
              >
                {activity.icon}
              </div>

              {/* Content */}
              <div
                className={`flex-1 p-4 rounded-2xl transition-all duration-300 hover:translate-x-2 ${
                  activity.highlight
                    ? "bg-gradient-to-r from-red-900/40 to-red-950/20 border border-red-500/30"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-yellow-400 font-bold text-sm px-2 py-0.5 bg-yellow-400/20 rounded-full">
                    {activity.time}
                  </span>
                  {activity.highlight && (
                    <span className="text-xs px-2 py-0.5 bg-red-500/30 text-white rounded-full animate-pulse">
                      ⭐ À ne pas manquer!
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-white text-lg">
                  {activity.title}
                </h3>
                <p className="text-white/60 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center p-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30">
        <p className="text-yellow-400 font-semibold">
          🎄 Dress code: Chandail de Noël laid! 🎄
        </p>
      </div>
    </div>
  );
}
