import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "album-mundial-2026";

export function useAlbum() {
  const [acquired, setAcquired] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set<string>(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...acquired]));
    } catch {
      // ignore
    }
  }, [acquired]);

  const toggle = useCallback((stickerId: string) => {
    setAcquired((prev) => {
      const next = new Set(prev);
      if (next.has(stickerId)) {
        next.delete(stickerId);
      } else {
        next.add(stickerId);
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setAcquired(new Set());
  }, []);

  return { acquired, toggle, reset };
}
