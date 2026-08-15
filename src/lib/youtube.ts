export function youtubeEmbedUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const playlist = parsed.searchParams.get("list");
    if (playlist) return `https://www.youtube.com/embed?listType=playlist&list=${encodeURIComponent(playlist)}`;
    const video = parsed.hostname === "youtu.be"
      ? parsed.pathname.slice(1)
      : parsed.searchParams.get("v") ?? parsed.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1];
    return video ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video)}` : null;
  } catch {
    return null;
  }
}

export function youtubeThumbnail(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const video = parsed.hostname === "youtu.be" ? parsed.pathname.slice(1) : parsed.searchParams.get("v");
    return video ? `https://i.ytimg.com/vi/${encodeURIComponent(video)}/hqdefault.jpg` : null;
  } catch {
    return null;
  }
}
