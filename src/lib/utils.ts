// Sinif adlarini bos/degersiz kisimlari atarak birlestirir.
export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

// Linkin dis kaynaga gidip gitmedigini kontrol eder.
export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}
