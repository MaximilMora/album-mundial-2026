import { cn } from "@/lib/utils";
import type { Sticker as StickerType } from "@/data/mundial2026";

interface StickerProps {
  sticker: StickerType;
  countryFlag: string;
  acquired: boolean;
  onToggle: (id: string) => void;
}

const positionColors: Record<string, string> = {
  PO: "bg-amber-100 text-amber-800",
  DEF: "bg-blue-100 text-blue-800",
  MED: "bg-green-100 text-green-800",
  DEL: "bg-red-100 text-red-800",
};

const positionLabel: Record<string, string> = {
  PO: "PO",
  DEF: "DF",
  MED: "MF",
  DEL: "DL",
};

export function Sticker({ sticker, countryFlag, acquired, onToggle }: StickerProps) {
  const isFlag = sticker.type === "flag";
  const isTeam = sticker.type === "team";

  return (
    <button
      onClick={() => onToggle(sticker.id)}
      title={acquired ? "Clic para quitar" : "Clic para marcar como obtenida"}
      className={cn(
        "relative flex flex-col items-center justify-between rounded-lg border-2 p-1.5 transition-all duration-200 cursor-pointer select-none",
        "w-[70px] h-[88px] shrink-0",
        acquired
          ? "border-yellow-400 bg-gradient-to-b from-yellow-50 to-amber-50 shadow-md shadow-yellow-200"
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
        {isFlag ? (
          <span className="text-3xl leading-none">{countryFlag}</span>
        ) : isTeam ? (
          <span className="text-2xl leading-none">👥</span>
        ) : (
          <span className="text-2xl leading-none">
            {sticker.position === "PO" ? "🧤" :
             sticker.position === "DEF" ? "🛡️" :
             sticker.position === "MED" ? "⚙️" : "⚡"}
          </span>
        )}
      </div>

      <div className="w-full flex flex-col items-center gap-0.5">
        <span className="text-[9px] font-semibold text-gray-700 leading-tight text-center max-w-full truncate px-0.5">
          {isFlag ? "Bandera" : isTeam ? "Equipo" : sticker.label}
        </span>
        {sticker.position && (
          <span className={cn("text-[8px] font-bold px-1 rounded-full leading-tight", positionColors[sticker.position])}>
            {positionLabel[sticker.position]}
          </span>
        )}
        {isFlag && (
          <span className="text-[8px] font-bold px-1 rounded-full bg-purple-100 text-purple-800 leading-tight">
            BDR
          </span>
        )}
        {isTeam && (
          <span className="text-[8px] font-bold px-1 rounded-full bg-orange-100 text-orange-800 leading-tight">
            GRP
          </span>
        )}
      </div>
    </button>
  );
}
