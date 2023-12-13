export interface IDataNews {
  articles: IArticles[];
  status: string;
  totalResults: number;
}

export interface IArticles {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string | null;
}
