import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { Group } from "@/data/mundial2026";
import { getCountryStickers } from "@/data/mundial2026";
import { CountryCard } from "./CountryCard";

interface GroupSectionProps {
  group: Group;
  acquired: Set<string>;
  onToggle: (id: string) => void;
  groupColor: string;
}

export function GroupSection({ group, acquired, onToggle, groupColor }: GroupSectionProps) {
  const [collapsed, setCollapsed] = useState(false);

  const { acquiredCount, total } = useMemo(() => {
    let acq = 0;
    let tot = 0;
    for (const country of group.countries) {
      const stickers = getCountryStickers(country);
      tot += stickers.length;
      acq += stickers.filter((s) => acquired.has(s.id)).length;
    }
    return { acquiredCount: acq, total: tot };
  }, [group, acquired]);

  const pct = Math.round((acquiredCount / total) * 100);

  return (
    <section className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <button
        onClick={() => setCollapsed((c) => !c)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-white font-bold text-left transition-opacity hover:opacity-90",
          groupColor
        )}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-extrabold tracking-wide">{group.name}</span>
          <span className="text-xs font-medium opacity-80">
            {group.countries.length} selecciones · {total} figuritas
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-24 rounded-full bg-white/30 overflow-hidden">
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs font-bold opacity-90">
              {acquiredCount}/{total}
            </span>
          </div>
          <span className="text-sm opacity-70">{collapsed ? "▶" : "▼"}</span>
        </div>
      </button>

      {!collapsed && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-gray-50">
          {group.countries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              acquired={acquired}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </section>
  );
}
