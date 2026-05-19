import { cn } from "@/lib/utils";
import type { SpecialSticker } from "@/data/specials";

interface SpecialStickerCardProps {
  sticker: SpecialSticker;
  acquired: boolean;
  onToggle: (id: string) => void;
}

function SpecialStickerCard({ sticker, acquired, onToggle }: SpecialStickerCardProps) {
  const isFwc = sticker.category === "FWC";

  return (
    <button
      onClick={() => onToggle(sticker.id)}
      title={acquired ? "Clic para quitar" : "Clic para marcar como obtenida"}
      className={cn(
        "relative flex flex-col items-center justify-between rounded-lg border-2 p-1.5 transition-all duration-200 cursor-pointer select-none",
        "w-[70px] h-[88px] shrink-0",
        acquired
          ? isFwc
            ? "border-yellow-400 bg-gradient-to-b from-yellow-50 to-amber-100 shadow-md shadow-yellow-300"
            : "border-sky-400 bg-gradient-to-b from-sky-50 to-blue-100 shadow-md shadow-sky-200"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm opacity-60"
      )}
    >
      <span className="absolute top-1 left-1.5 text-[9px] font-bold text-gray-400 leading-none">
        #{sticker.number}
      </span>

      {acquired && (
        <span className="absolute top-0.5 right-0.5 text-[10px] leading-none">⭐</span>
      )}

      <div className="flex-1 flex items-center justify-center mt-2">
        <span className="text-2xl leading-none">
          {isFwc
            ? (sticker.number === 1 ? "🌐" :
               sticker.number === 2 ? "🏆" :
               sticker.number === 3 ? "🦁" :
               sticker.number === 4 ? "⚽" : "🏟️")
            : "👑"}
        </span>
      </div>

      <div className="w-full flex flex-col items-center gap-0.5">
        <span className="text-[8px] font-semibold text-gray-700 leading-tight text-center max-w-full truncate px-0.5">
          {sticker.label}
        </span>
        <span
          className={cn(
            "text-[8px] font-bold px-1 rounded-full leading-tight",
            isFwc
              ? "bg-yellow-200 text-yellow-800"
              : "bg-sky-200 text-sky-800"
          )}
        >
          {sticker.category}
        </span>
      </div>
    </button>
  );
}

interface SpecialSectionProps {
  fwcStickers: SpecialSticker[];
  ccStickers: SpecialSticker[];
  acquired: Set<string>;
  onToggle: (id: string) => void;
}

export function SpecialSection({ fwcStickers, ccStickers, acquired, onToggle }: SpecialSectionProps) {
  const fwcCount = fwcStickers.filter((s) => acquired.has(s.id)).length;
  const ccCount = ccStickers.filter((s) => acquired.has(s.id)).length;
  const total = fwcStickers.length + ccStickers.length;
  const totalAcquired = fwcCount + ccCount;

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <div>
            <h2 className="text-base font-black tracking-wide">Figuritas Especiales</h2>
            <p className="text-[11px] text-gray-400">FWC · CC</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-black text-yellow-400">
            {totalAcquired}/{total}
          </span>
          <div className="w-28 h-2 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-500"
              style={{ width: `${Math.round((totalAcquired / total) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white p-4 flex flex-col gap-5">
        {/* FWC block */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-0.5 rounded-full tracking-widest">
              FWC
            </span>
            <span className="text-xs text-gray-500 font-medium">FIFA World Cup · Estadios & Símbolos</span>
            <span className="ml-auto text-xs font-bold text-yellow-700">{fwcCount}/{fwcStickers.length}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {fwcStickers.map((s) => (
              <SpecialStickerCard
                key={s.id}
                sticker={s}
                acquired={acquired.has(s.id)}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>

        {/* CC block */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-sky-400 text-sky-900 text-[10px] font-black px-2 py-0.5 rounded-full tracking-widest">
              CC
            </span>
            <span className="text-xs text-gray-500 font-medium">Campeones del Mundo</span>
            <span className="ml-auto text-xs font-bold text-sky-700">{ccCount}/{ccStickers.length}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {ccStickers.map((s) => (
              <SpecialStickerCard
                key={s.id}
                sticker={s}
                acquired={acquired.has(s.id)}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
