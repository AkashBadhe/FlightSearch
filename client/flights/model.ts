export type Flight = {
  id?: number;
  text: string;
  completed: boolean;
  fromCity: string,
  toCity: string,
  departure: string,
  arrival: string,
  airline: string,
  price: number,
    
};

export type IState = {
  flights: Flight[],
  filteredFlights: Flight[],
  loading?: boolean,
  selectedCities: string[],
  selectedDate: string
};
