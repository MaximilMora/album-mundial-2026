export interface SpecialSticker {
  id: string;
  number: number | "00";
  label: string;
  sublabel: string;
  category: "FWC" | "00";
}

// Sticker #00 — Panini intro foil (first sticker of every Panini album)
export const sticker00: SpecialSticker = {
  id: "sticker-00",
  number: "00",
  label: "We Are Panini",
  sublabel: "00",
  category: "00",
};

// FWC1–FWC8: Introducción al torneo (foil)
// FWC9–FWC19: Museo FIFA — Historia de campeones (foil)
export const fwcStickers: SpecialSticker[] = [
  { id: "fwc-1",  number: 1,  label: "Emblema oficial (1/2)",   sublabel: "FWC", category: "FWC" },
  { id: "fwc-2",  number: 2,  label: "Emblema oficial (2/2)",   sublabel: "FWC", category: "FWC" },
  { id: "fwc-3",  number: 3,  label: "Mascota oficial",         sublabel: "FWC", category: "FWC" },
  { id: "fwc-4",  number: 4,  label: "Slogan oficial",          sublabel: "FWC", category: "FWC" },
  { id: "fwc-5",  number: 5,  label: "Balón oficial",           sublabel: "FWC", category: "FWC" },
  { id: "fwc-6",  number: 6,  label: "Canadá — Sede",           sublabel: "FWC", category: "FWC" },
  { id: "fwc-7",  number: 7,  label: "México — Sede",           sublabel: "FWC", category: "FWC" },
  { id: "fwc-8",  number: 8,  label: "USA — Sede",              sublabel: "FWC", category: "FWC" },
  { id: "fwc-9",  number: 9,  label: "Italia 1934",             sublabel: "FWC", category: "FWC" },
  { id: "fwc-10", number: 10, label: "Uruguay 1950",            sublabel: "FWC", category: "FWC" },
  { id: "fwc-11", number: 11, label: "Alemania Occ. 1954",      sublabel: "FWC", category: "FWC" },
  { id: "fwc-12", number: 12, label: "Brasil 1962",             sublabel: "FWC", category: "FWC" },
  { id: "fwc-13", number: 13, label: "Alemania Occ. 1974",      sublabel: "FWC", category: "FWC" },
  { id: "fwc-14", number: 14, label: "Argentina 1986",          sublabel: "FWC", category: "FWC" },
  { id: "fwc-15", number: 15, label: "Brasil 1994",             sublabel: "FWC", category: "FWC" },
  { id: "fwc-16", number: 16, label: "Brasil 2002",             sublabel: "FWC", category: "FWC" },
  { id: "fwc-17", number: 17, label: "Italia 2006",             sublabel: "FWC", category: "FWC" },
  { id: "fwc-18", number: 18, label: "Alemania 2014",           sublabel: "FWC", category: "FWC" },
  { id: "fwc-19", number: 19, label: "Argentina 2022",          sublabel: "FWC", category: "FWC" },
];
