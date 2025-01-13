import { ResultType, Source, Subsection } from "../../helpers/enum";
import { Media } from "../../types/common";
import { Responses } from "../api.types";

export type MostPopular = {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: Source;
  published_date: string;
  updated: string;
  section: string;
  subsection: Subsection;
  nytdsection: string;
  adx_keywords: string;
  column: null;
  byline: string;
  type: ResultType;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  eta_id: number;
};

export type GetParams = MostPopular;

export type GetResponse = Responses<MostPopular>;
