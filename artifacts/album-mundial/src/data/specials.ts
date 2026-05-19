export interface SpecialSticker {
  id: string;
  number: number | "00";
  label: string;
  sublabel: string;
  category: "FWC" | "CC" | "00";
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
// CC1–CC14: Figuritas exclusivas Coca-Cola × Panini — Versión LATAM (14 figuritas)
// Solo se obtienen dentro de etiquetas desprendibles de botellas Coca-Cola de 20oz edición especial.
// Página doble dedicada en el álbum oficial.
export const ccStickers: SpecialSticker[] = [
  { id: "cc-1",  number: 1,  label: "Lamine Yamal",       sublabel: "España",       category: "CC" },
  { id: "cc-2",  number: 2,  label: "Joshua Kimmich",     sublabel: "Alemania",     category: "CC" },
  { id: "cc-3",  number: 3,  label: "Harry Kane",         sublabel: "Inglaterra",   category: "CC" },
  { id: "cc-4",  number: 4,  label: "Edson Álvarez",      sublabel: "México",       category: "CC" },
  { id: "cc-5",  number: 5,  label: "Joško Gvardiol",     sublabel: "Croacia",      category: "CC" },
  { id: "cc-6",  number: 6,  label: "Federico Valverde",  sublabel: "Uruguay",      category: "CC" },
  { id: "cc-7",  number: 7,  label: "Jefferson Lerma",    sublabel: "Colombia",     category: "CC" },
  { id: "cc-8",  number: 8,  label: "Enner Valencia",     sublabel: "Ecuador",      category: "CC" },
  { id: "cc-9",  number: 9,  label: "Jordan Ayew",        sublabel: "Ghana",        category: "CC" },
  { id: "cc-10", number: 10, label: "Virgil van Dijk",    sublabel: "Países Bajos", category: "CC" },
  { id: "cc-11", number: 11, label: "Alphonso Davies",    sublabel: "Canadá",       category: "CC" },
  { id: "cc-12", number: 12, label: "Emiliano Martínez",  sublabel: "Argentina",    category: "CC" },
  { id: "cc-13", number: 13, label: "Raúl Jiménez",       sublabel: "México",       category: "CC" },
  { id: "cc-14", number: 14, label: "Lautaro Martínez",   sublabel: "Argentina",    category: "CC" },
];

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
