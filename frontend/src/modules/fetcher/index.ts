import { LeaderboardItem } from '../leaderboard';

const API_PATH = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://click-api.herokuapp.com';

export type PostClickResponse = {
  your_clicks: number,
  team_clicks: number,
};

export const fetcher = async <T>(url: string, method: 'GET' | 'POST', headers = {}, body: {} | null = null): Promise<T> => {
  const raw = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
  return raw.json();
};

export const getLeaderboard: () => Promise<LeaderboardItem[]> = async () =>
  (await fetcher<LeaderboardItem[]>(`${API_PATH}/api/leaderboard`, 'GET'));

export const postClick: (session: string, team: string) =>
  Promise<PostClickResponse> = async (session: string, team: string) =>
  (await fetcher<PostClickResponse>(`${API_PATH}/api/click`, 'POST', {}, { session, team }));
