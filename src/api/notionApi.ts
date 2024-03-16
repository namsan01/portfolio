import { ResultItem } from "../types/Project";

const TOKEN = process.env.React_APP_Notion_Key;
const DATABASE_ID = process.env.React_APP_Notion_DATA;

interface ResponseData {
  object: string;
  results: ResultItem[];
  next_cursor: string | null;
  has_more: boolean;
  type: string;
}

const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Notion-Version": "2022-06-28",
    "content-type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({
    sorts: [
      {
        property: "title",
        direction: "ascending",
      },
    ],
  }),
};

export const getData = async (): Promise<ResultItem[]> => {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const result: ResponseData = await res.json();

  return result.results;
};

