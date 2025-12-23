"use client";

import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  fontSize: number;
  symbol: string;
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const symbols = ["❄", "❅", "❆", "✻", "✼", "❋"];
    const flakes: Snowflake[] = [];

    for (let i = 0; i < 10; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 10,
        animationDelay: Math.random() * 10,
        fontSize: 0.5 + Math.random() * 1.5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      });
    }

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.fontSize}rem`,
            animation: `fall ${flake.animationDuration}s linear infinite`,
            animationDelay: `${flake.animationDelay}s`,
          }}
        >
          {flake.symbol}
        </div>
      ))}
    </div>
  );
}
