export interface IMake {
  ID: number;
  Name: string;
}

export interface IModel {
  MakeID: number;
  ID: number;
  Name: string;
}

export interface IVersion {
  ModelID: number;
  ID: number;
  Name: string;
}

export interface IYear {
  ID: number;
  Name: string;
}

export interface IPrice {
  ID: number;
  Name: string;
}
