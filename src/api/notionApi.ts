import { ResultItem } from "../types/Project";

interface ResponseData {
  object: string;
  results: ResultItem[];
  next_cursor: string | null;
  has_more: boolean;
  type: string;
}

export const getData = async (): Promise<ResultItem[]> => {
  const res = await fetch(`https://portfolio.corcor37.workers.dev/`);

  const result: ResponseData = await res.json();

  return result.results;
};
