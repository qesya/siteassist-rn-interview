export type RootStackParamlist = {
  Home: undefined;
  History: undefined;
};

export interface IRootState {
  history: {
    calculation: string;
    result: number;
  }[];
}
