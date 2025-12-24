import Snowfall from "@/components/Snowfall";
import Leaderboard from "@/components/Leaderboard";
import Activities from "@/components/Activities";
import Link from "next/link";

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
        <header className="text-center">
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
            Party de Noël 2025
          </h1>

          <p className="text-xl md:text-2xl text-yellow-100/80 font-light">
            🎁 La fête la plus magique de l&apos;année! 🎁
          </p>

          {/* Fun section */}
          <section className="my-8 text-center">
            <div className="christmas-card rounded-3xl p-8 max-w-2xl mx-auto">
              <h2 className="font-festive text-3xl text-yellow-400 mb-6 glow-text w-max">
                🎅 Message du Père Noël 🎅
              </h2>
              <p className="text-white/80 text-lg italic leading-relaxed">
                &quot;Ho ho ho! Préparez-vous pour une soirée inoubliable
                remplie de rires, de compétitions et de moments magiques! Venez
                comme vous êtes... mais venez habillés quand même! Et surtout,
                amenez votre esprit festif!&quot;
              </p>
              <div className="mt-6 flex justify-center gap-4 text-4xl">
                <span className="animate-bounce">🦌</span>
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

          <div className="christmas-card max-w-2xl mx-auto px-2 py-3 rounded-xl w-full mt-8 flex flex-wrap justify-center gap-4">
            <span className="text-yellow-400 font-semibold">
              📅 25 Décembre 2025
            </span>
            <span className="text-yellow-400 font-semibold">
              🕕 14h00 - ???
            </span>
            <span className="text-yellow-400 font-semibold">
              📍 SOS Aventures ensuite chez Jean-marc et Tanya!
            </span>
            <Link
              href="https://maps.app.goo.gl/shZkEoDUq2h84dq96"
              className="bg-white/10 flex justify-between items-center px-6 py-3 rounded-xl w-full text-yellow-400 font-semibold border-white border-2 hover:bg-white/20 transition-all duration-300"
              target="_blank"
            >
              <div>
                <div className="text-yellow-400 font-semibold">
                  <span className="text-yellow-400 font-semibold">
                    SOS Aventures: Location:
                  </span>
                </div>
                <div className="text-yellow-400 font-semibold">
                  900 Boulevard Grignon Local 01051, Saint-Jérôme, QC J7Y 3S7
                </div>
              </div>
              <div className="text-7xl animate-pulse">›</div>
            </Link>
            <Link
              href="https://maps.app.goo.gl/z4YEURRuofxke4Np8"
              className="bg-white/10 flex justify-between items-center px-6 py-3 rounded-xl w-full text-yellow-400 font-semibold border-white border-2"
              target="_blank"
            >
              <div>
                <div className="text-yellow-400 font-semibold">
                  <span className="text-yellow-400 font-semibold">
                    Jean-marc et Tanya: Location:
                  </span>
                </div>
                <div className="text-yellow-400 font-semibold">
                  78 Rue de la Taupiniere, Ste-Sophie, QC
                </div>
              </div>
              <div className="text-7xl animate-pulse">›</div>
            </Link>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start mt-6">
          <Activities />
          <Leaderboard />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/40 text-sm">
          <p>
            Fait avec ❤️ et beaucoup de{" "}
            <Link href="/admin">chocolat chaud 🍫</Link>
          </p>
          <p className="mt-2">© 2025 - Joyeuses Fêtes! 🎄</p>
        </footer>
      </div>
    </main>
  );
}
