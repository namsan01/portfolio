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
};

export const getData = async () => {
  try {
    const result = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options
    );
    console.log(result);

    const data = await result.json();
    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};
