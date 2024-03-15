export interface ResultItem {
  properties: ResultProperties;
  public_url: string;
  url: string;
  cover: CoverDetails;
}

export interface CoverDetails {
  file: {
    url: string;
    expiry_time: string;
  };
  expiry_time: string;
  url: string;
  type: string;
}

export interface ResultProperties {
  Tag: {
    id: string;
    type: string;
    multi_select: { id: string; name: string }[];
  };
  WorkPeriod: {
    id: string;
    type: string;
    rich_text: {
      annotations: { [key: string]: boolean };
      href: string | null;
      plain_text: string;
      text: { content: string; link: null }[];
      type: string;
    }[];
  };
  name: {
    id: string;
    type: string;
    title: {
      annotations: { [key: string]: boolean };
      href: string | null;
      plain_text: string;
      text: { content: string; link: null }[];
      type: string;
    }[];
  };
  notion: {
    id: string;
    type: string;
    rich_text: {
      annotations: { [key: string]: boolean };
      href: string | null;
      plain_text: string;
      text: { content: string; link: null }[];
      type: string;
    }[];
  };
}
