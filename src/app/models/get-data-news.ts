export interface IDataNews {
  articles: IArticles[];
  status: string;
  totalResults: number;
}

export interface SwiperArticles {
  articles: IArticles[];
}
export interface IArticles {
  source: { id: string; name: string };
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: Date;
  title: string;
  url: string;
  urlToImage: string | null;
}
