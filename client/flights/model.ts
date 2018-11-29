export type Flight = {
  id?: number;
  text: string;
  completed: boolean;
};

export type IState = {
	flights: Flight[],
	loading?: boolean,
};
