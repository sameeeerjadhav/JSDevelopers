const STORAGE_KEY = "js-garden-cookie-consent";

export type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentCategories & {
  necessary: true;
  savedAt: string;
};

export function getConsent(): ConsentCategories | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    return { analytics: !!parsed.analytics, marketing: !!parsed.marketing };
  } catch {
    return null;
  }
}

export function hasConsent(category: keyof ConsentCategories): boolean {
  return getConsent()?.[category] ?? false;
}

export function saveConsent(consent: ConsentCategories) {
  if (typeof window === "undefined") return;
  const stored: StoredConsent = {
    necessary: true,
    ...consent,
    savedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  window.dispatchEvent(new CustomEvent("js-consent-updated", { detail: consent }));
}
