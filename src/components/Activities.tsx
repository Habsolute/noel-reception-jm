"use client";

interface SubActivity {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Activity {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
  activityList?: SubActivity[];
}

const activities: Activity[] = [
  {
    id: 1,
    time: "14h00",
    title: "SOS Aventures",
    description:
      "Rendez-vous au Carrefour du Nord! Le Père Noël a besoin de renforts... et de votre ponctualité! 🎅",
    icon: "🎄",
    highlight: true,
  },
  {
    id: 2,
    time: "14h15",
    title: "Cocktails de bienvenue",
    description:
      "Parce qu'on n'affronte pas un escape game à jeun! Tchin tchin! 🥂",
    icon: "🍷",
  },
  {
    id: 3,
    time: "14h45",
    title: "Début du Escape Game",
    description:
      "Saurez-vous vous échapper avant que le Grinch ne vole Noël? Spoiler: probablement pas.",
    icon: "🎲",
  },
  {
    id: 4,
    time: "17h00",
    title: "On part pour chez Jean-Marc",
    description:
      "GPS: direction le paradis de la bouffe et du fun! Attachez vos tuques! 🧣",
    icon: "🚗",
  },
  {
    id: 5,
    time: "18h15",
    title: "Souper de Noël",
    description:
      "Calories? On connaît pas ça ici! Mangez comme si c'était votre dernier repas de l'année! 🦃",
    icon: "🍽️",
    highlight: true,
  },
  {
    id: 6,
    time: "????",
    title: "Bingo de Noël",
    description:
      "BINGO! Criez-le fort, même si c'est pas vrai, on verra bien! 🤪",
    icon: "🎯",
  },
  {
    id: 7,
    time: "????",
    title: "Dessert de Noël",
    description:
      "Le régime commence en janvier... ou en février... ou jamais! 🍫",
    icon: "🍰",
  },
  {
    id: 8,
    time: "Activités",
    title: "Activités pour tous les âges",
    description:
      "Que vous ayez 7 ou 77 ans, ici on joue et on compétitionne comme des champions! 💪",
    icon: "🎉",
    highlight: true,
    activityList: [
      {
        id: 1,
        title: "Sim Racing",
        description:
          "Devenez le Lewis Hamilton de Noël! Attention aux dérapages sur la neige virtuelle! 🏎️",
        icon: "🎮",
      },
      {
        id: 2,
        title: "Hockey sur table",
        description:
          "La rivalité Canadiens-Nordiques version salon! Pas de bagarres SVP! 🏒",
        icon: "🥅",
      },
      {
        id: 3,
        title: "Hitster Bingo",
        description:
          "Prouvez que votre goût musical est supérieur! (Spoiler: c'est faux) 🎵",
        icon: "🎤",
      },
      {
        id: 4,
        title: "Trouve les cure-dents",
        description:
          "Cherchez dans toute la maison! Non, pas dans le frigo... quoique? 🔍",
        icon: "🔎",
      },
      {
        id: 5,
        title: "Plus Encore",
        description: "Des surprises que même le Père Noël ignore! Ho ho ho! 🎁",
        icon: "✨",
      },
    ],
  },
];

export default function Activities() {
  return (
    <div className="christmas-card rounded-xl p-4 py-8 max-w-md w-full">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-4xl animate-bounce">📋</span>
        <h2 className="font-festive text-3xl text-yellow-400 glow-text">
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

                {/* Sub-activities list */}
                {activity.activityList && activity.activityList.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <div className="grid md:grid-cols-2 gap-2">
                      {activity.activityList.map((subActivity) => (
                        <div
                          key={subActivity.id}
                          className="bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-all duration-200 hover:scale-105 border border-white/10 hover:border-yellow-400/30"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{subActivity.icon}</span>
                            <span className="text-white font-medium text-sm">
                              {subActivity.title}
                            </span>
                          </div>
                          <p className="text-white/50 text-xs">
                            {subActivity.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
