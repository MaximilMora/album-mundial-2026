import { useMemo, useState } from "react";
import { groups, TOTAL_STICKERS } from "@/data/mundial2026";
import { fwcStickers, ccStickers } from "@/data/specials";
import { useAlbum } from "@/hooks/useAlbum";
import { GroupSection } from "@/components/GroupSection";
import { SpecialSection } from "@/components/SpecialSection";

const SPECIAL_TOTAL = fwcStickers.length + ccStickers.length;

const GROUP_COLORS = [
  "bg-red-600",
  "bg-blue-700",
  "bg-emerald-700",
  "bg-purple-700",
  "bg-orange-600",
  "bg-teal-700",
  "bg-rose-700",
  "bg-indigo-700",
  "bg-green-800",
  "bg-sky-700",
  "bg-amber-700",
  "bg-violet-700",
];

export default function App() {
  const { acquired, toggle, reset } = useAlbum();
  const [showConfirm, setShowConfirm] = useState(false);

  const acquiredCount = acquired.size;
  const grandTotal = TOTAL_STICKERS + SPECIAL_TOTAL;
  const pct = Math.round((acquiredCount / grandTotal) * 100);

  const completedGroups = useMemo(() => {
    return groups.filter((g) =>
      g.countries.every((c) =>
        c.players.every((_, i) => {
          const id = `${c.id}-${i + 2}`;
          return acquired.has(id);
        }) &&
        acquired.has(`${c.id}-1`) &&
        acquired.has(`${c.id}-13`)
      )
    ).length;
  }, [acquired]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#1a3a6b] to-[#0f2044] text-white shadow-xl">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black tracking-tight leading-none">
                    ⚽ Álbum Mundial
                  </span>
                  <span className="text-yellow-400 font-black text-2xl leading-none">
                    2026
                  </span>
                </div>
                <span className="text-[11px] text-blue-200 font-medium tracking-widest uppercase">
                  USA · Canada · México
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex-1 min-w-[180px] max-w-sm flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-blue-200">Progreso del álbum</span>
                <span className="text-sm font-black text-yellow-400">
                  {acquiredCount} / {grandTotal}
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-500 shadow-sm"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-blue-300">
                <span>{pct}% completado</span>
                <span>{completedGroups} grupos completos</span>
              </div>
            </div>

            {/* Reset */}
            <div className="flex items-center gap-2">
              {showConfirm ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-yellow-300">¿Confirmar reset?</span>
                  <button
                    onClick={() => { reset(); setShowConfirm(false); }}
                    className="text-xs bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Sí
                  </button>
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="text-xs bg-white/20 hover:bg-white/30 text-white font-bold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    No
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowConfirm(true)}
                  className="text-xs bg-white/10 hover:bg-white/20 text-white/80 hover:text-white font-semibold px-3 py-1.5 rounded-lg transition-all border border-white/20"
                >
                  Reiniciar álbum
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Legend */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 bg-white/70 rounded-xl px-4 py-2.5 border border-amber-100 shadow-sm">
          <span className="font-semibold text-gray-700 mr-1">Tipos de figurita:</span>
          <span className="flex items-center gap-1">
            <span className="text-base">🏴</span> <strong>#1</strong> Bandera del país
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <span className="text-base">🧤</span> Portero (PO)
          </span>
          <span className="flex items-center gap-1">
            <span className="text-base">🛡️</span> Defensa (DF)
          </span>
          <span className="flex items-center gap-1">
            <span className="text-base">⚙️</span> Mediocampista (MF)
          </span>
          <span className="flex items-center gap-1">
            <span className="text-base">⚡</span> Delantero (DL)
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <span className="text-base">👥</span> <strong>#13</strong> Foto grupal
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <span className="text-base">⭐</span> Figurita obtenida
          </span>
        </div>
      </div>

      {/* Special stickers + Groups */}
      <main className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 pb-12">
        <SpecialSection
          fwcStickers={fwcStickers}
          ccStickers={ccStickers}
          acquired={acquired}
          onToggle={toggle}
        />
        {groups.map((group, i) => (
          <GroupSection
            key={group.id}
            group={group}
            acquired={acquired}
            onToggle={toggle}
            groupColor={GROUP_COLORS[i % GROUP_COLORS.length]}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-gray-400 border-t border-amber-100 bg-white/50">
        Álbum de Figuritas · FIFA World Cup 2026™ · El progreso se guarda automáticamente
      </footer>
    </div>
  );
}
