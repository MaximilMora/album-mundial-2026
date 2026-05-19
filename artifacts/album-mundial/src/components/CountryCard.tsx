import { useMemo } from "react";
import { cn } from "@/lib/utils";
import type { Country } from "@/data/mundial2026";
import { getCountryStickers } from "@/data/mundial2026";
import { Sticker } from "./Sticker";

interface CountryCardProps {
  country: Country;
  acquired: Set<string>;
  onToggle: (id: string) => void;
}

export function CountryCard({ country, acquired, onToggle }: CountryCardProps) {
  const stickers = useMemo(() => getCountryStickers(country), [country]);
  const acquiredCount = stickers.filter((s) => acquired.has(s.id)).length;
  const total = stickers.length;
  const pct = Math.round((acquiredCount / total) * 100);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xl leading-none">{country.flag}</span>
          <span className="text-sm font-semibold text-gray-800">{country.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-16 rounded-full bg-gray-200 overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                pct === 100 ? "bg-green-500" : "bg-yellow-400"
              )}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
            {acquiredCount}/{total}
          </span>
        </div>
      </div>

      <div className="p-2 flex flex-wrap gap-1.5">
        {stickers.map((sticker) => (
          <Sticker
            key={sticker.id}
            sticker={sticker}
            countryFlag={country.flag}
            acquired={acquired.has(sticker.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}
