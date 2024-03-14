const TOKEN = process.env.React_APP_Notion_Key;
const DATABASE_ID = process.env.React_APP_Notion_DATA;

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

export const getData = async () => {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const result = await res.json();

  console.log(result);
};
