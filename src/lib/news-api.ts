import { unstable_rethrow } from "next/navigation";

const NEWS_API_BASE_URL = "https://news-api-v2.vercel.app";
const MAX_ATTEMPTS = 2;
const REQUEST_TIMEOUT_MS = 4_000;

/**
 * Fetches data from the news API with a short timeout and one retry.
 * Vercel's DNS can occasionally resolve to an unreachable edge IP, so a
 * second attempt gives the request a chance to hit a working address.
 */
export async function fetchNewsApi(path: string): Promise<Response | null> {
  const url = `${NEWS_API_BASE_URL}${path}`;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(url, {
        cache: "no-store",
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });

      if (response.ok) {
        return response;
      }

      console.error(
        `[news-api] ${url} responded with ${response.status} (attempt ${attempt}/${MAX_ATTEMPTS})`,
      );
    } catch (error) {
      // Let Next.js handle its own control-flow errors (dynamic rendering,
      // redirects, notFound, etc.) instead of retrying them.
      unstable_rethrow(error);
      console.error(
        `[news-api] ${url} request failed (attempt ${attempt}/${MAX_ATTEMPTS})`,
        error,
      );
    }

    if (attempt < MAX_ATTEMPTS) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }

  return null;
}
