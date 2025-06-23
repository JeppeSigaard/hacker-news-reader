export function getHostnameFromUrlString(url: string): string {
  try {
    return new URL(url).hostname;
  } catch (_) {
    return url;
  }
}
