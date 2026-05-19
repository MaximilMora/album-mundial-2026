export interface SpecialSticker {
  id: string;
  number: number;
  label: string;
  sublabel: string;
  category: "FWC" | "CC";
}

export const fwcStickers: SpecialSticker[] = [
  { id: "fwc-1",  number: 1,  label: "Logo oficial",       sublabel: "FWC", category: "FWC" },
  { id: "fwc-2",  number: 2,  label: "Trofeo FIFA",        sublabel: "FWC", category: "FWC" },
  { id: "fwc-3",  number: 3,  label: "Mascota",            sublabel: "FWC", category: "FWC" },
  { id: "fwc-4",  number: 4,  label: "Balón oficial",      sublabel: "FWC", category: "FWC" },
  { id: "fwc-5",  number: 5,  label: "MetLife Stadium",    sublabel: "FWC", category: "FWC" },
  { id: "fwc-6",  number: 6,  label: "AT&T Stadium",       sublabel: "FWC", category: "FWC" },
  { id: "fwc-7",  number: 7,  label: "SoFi Stadium",       sublabel: "FWC", category: "FWC" },
  { id: "fwc-8",  number: 8,  label: "Levi's Stadium",     sublabel: "FWC", category: "FWC" },
  { id: "fwc-9",  number: 9,  label: "Arrowhead Stadium",  sublabel: "FWC", category: "FWC" },
  { id: "fwc-10", number: 10, label: "Lincoln Financial",  sublabel: "FWC", category: "FWC" },
  { id: "fwc-11", number: 11, label: "Mercedes-Benz Std.", sublabel: "FWC", category: "FWC" },
  { id: "fwc-12", number: 12, label: "NRG Stadium",        sublabel: "FWC", category: "FWC" },
  { id: "fwc-13", number: 13, label: "Gillette Stadium",   sublabel: "FWC", category: "FWC" },
  { id: "fwc-14", number: 14, label: "Empower Field",      sublabel: "FWC", category: "FWC" },
  { id: "fwc-15", number: 15, label: "BC Place",           sublabel: "FWC", category: "FWC" },
  { id: "fwc-16", number: 16, label: "BMO Field",          sublabel: "FWC", category: "FWC" },
  { id: "fwc-17", number: 17, label: "Estadio Azteca",     sublabel: "FWC", category: "FWC" },
  { id: "fwc-18", number: 18, label: "Est. Guadalajara",   sublabel: "FWC", category: "FWC" },
  { id: "fwc-19", number: 19, label: "Est. Monterrey",     sublabel: "FWC", category: "FWC" },
];

export const ccStickers: SpecialSticker[] = [
  { id: "cc-1",  number: 1,  label: "Uruguay 1930",     sublabel: "CC", category: "CC" },
  { id: "cc-2",  number: 2,  label: "Italia 1934",      sublabel: "CC", category: "CC" },
  { id: "cc-3",  number: 3,  label: "Francia 1998",     sublabel: "CC", category: "CC" },
  { id: "cc-4",  number: 4,  label: "Brasil 1970",      sublabel: "CC", category: "CC" },
  { id: "cc-5",  number: 5,  label: "Alemania 1974",    sublabel: "CC", category: "CC" },
  { id: "cc-6",  number: 6,  label: "Argentina 1978",   sublabel: "CC", category: "CC" },
  { id: "cc-7",  number: 7,  label: "España 2010",      sublabel: "CC", category: "CC" },
  { id: "cc-8",  number: 8,  label: "Alemania 2014",    sublabel: "CC", category: "CC" },
  { id: "cc-9",  number: 9,  label: "Francia 2018",     sublabel: "CC", category: "CC" },
  { id: "cc-10", number: 10, label: "Argentina 2022",   sublabel: "CC", category: "CC" },
  { id: "cc-11", number: 11, label: "Brasil 1994",      sublabel: "CC", category: "CC" },
  { id: "cc-12", number: 12, label: "Italia 2006",      sublabel: "CC", category: "CC" },
  { id: "cc-13", number: 13, label: "Inglaterra 1966",  sublabel: "CC", category: "CC" },
  { id: "cc-14", number: 14, label: "Brasil 2002",      sublabel: "CC", category: "CC" },
];
