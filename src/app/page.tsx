import Snowfall from "@/components/Snowfall";
import Leaderboard from "@/components/Leaderboard";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Snowfall Effect */}
      <Snowfall />

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-40" />
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-40" />

      {/* Decorative lights */}
      <div className="fixed top-0 left-0 w-full flex justify-around py-2 z-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-twinkle"
            style={{
              backgroundColor: ["#C41E3A", "#228B22", "#FFD700", "#01796F"][
                i % 4
              ],
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 0 10px ${
                ["#C41E3A", "#228B22", "#FFD700", "#01796F"][i % 4]
              }`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-6xl animate-float">🎄</span>
            <span
              className="text-5xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              🎅
            </span>
            <span
              className="text-6xl animate-float"
              style={{ animationDelay: "2s" }}
            >
              🎄
            </span>
          </div>

          <h1 className="font-festive text-5xl md:text-7xl text-white mb-4 glow-text">
            Party de Noël 2024
          </h1>

          <p className="text-xl md:text-2xl text-yellow-100/80 font-light">
            🎁 La fête la plus magique de l&apos;année! 🎁
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="christmas-card px-6 py-3 rounded-full">
              <span className="text-yellow-400 font-semibold">
                📅 25 Décembre 2025
              </span>
            </div>
            <div className="christmas-card px-6 py-3 rounded-full">
              <span className="text-yellow-400 font-semibold">
                🕕 14h00 - ???
              </span>
            </div>
            <div className="christmas-card px-6 py-3 rounded-full">
              <span className="text-yellow-400 font-semibold">
                📍 Chez nous!
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          <Leaderboard />
          <Activities />
        </div>

        {/* Fun section */}
        <section className="mt-16 text-center">
          <div className="christmas-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h2 className="font-festive text-3xl text-yellow-400 mb-6 glow-text">
              🎅 Message du Père Noël 🎅
            </h2>
            <p className="text-white/80 text-lg italic leading-relaxed">
              &quot;Ho ho ho! Préparez-vous pour une soirée inoubliable remplie
              de rires, de chansons et de moments magiques! N&apos;oubliez pas
              votre plus beau chandail de Noël laid... et votre esprit
              festif!&quot;
            </p>
            <div className="mt-6 flex justify-center gap-4 text-4xl">
              <span className="animate-bounce">🦌</span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.1s" }}
              >
                🦌
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                🦌
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                🦌
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                🦌
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                🦌
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.6s" }}
              >
                🦌
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.7s" }}
              >
                🦌
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                🛷
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/40 text-sm">
          <p>Fait avec ❤️ et beaucoup de chocolat chaud 🍫</p>
          <p className="mt-2">© 2024 - Joyeuses Fêtes! 🎄</p>
        </footer>
      </div>
    </main>
  );
}
