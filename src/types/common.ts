export type Media = {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetadata[];
};

export type MediaMetadata = {
  url: string;
  format: string;
  height: number;
  width: number;
};

export type Image = {
  url: string;
  altText: string;
  width?: number;
  height?: number;
};
