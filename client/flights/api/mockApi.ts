import Promise from "ts-promise";
import delay from './delay';


const data = [
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: '2018-03-02T18:30:00.000Z',
		arrival: '2018-03-03T18:30:00.000Z',
		airline: 'Air Asia, Jetstar',
		price: 360,
	},
	{
		id:2,
		fromCity: 'From City 2',
		toCity: 'To City 2',
		departure: '2018-03-04T18:30:00.000Z',
		arrival: '2018-03-05T18:30:00.000Z',
		airline: 'IndiGo (6E)',
		price: 380,
	},
	{
		id:3,
		fromCity: 'From City 3',
		toCity: 'To City 3',
		departure: '2018-03-02T18:30:00.000Z',
		arrival: '2018-03-02T18:30:00.000Z',
		airline: 'Air India (AI)',
		price: 340,
	},
	{
		id:4,
		fromCity: 'From City 4',
		toCity: 'To City 4',
		departure: '2018-03-02T18:30:00.000Z',
		arrival: '2018-03-02T18:30:00.000Z',
		airline: 'British Airways (BA)',
		price: 330,
	},
	{
		id:5,
		fromCity: 'From City 5',
		toCity: 'To City 5',
		departure: '2018-03-02T18:30:00.000Z',
		arrival: '2018-03-02T18:30:00.000Z',
		airline: 'Emirates (EK)',
		price: 310,
	},
	{
		id:6,
		fromCity: 'From City 6',
		toCity: 'To City 6',
		departure: '2018-03-02T18:30:00.000Z',
		arrival: '2018-03-02T18:30:00.000Z',
		airline: 'GoAir (G8)',
		price: 220,
	},
	{
		id:7,
		fromCity: 'From City 7',
		toCity: 'To City 7',
		departure: '2018-03-02T18:30:00.000Z',
		arrival: '2018-03-02T18:30:00.000Z',
		airline: 'Etihad Airways (EY)',
		price: 660,
	},
];

class FlightsApi {
  static getFlights(city: string[], date: string){
  	return new Promise((resolve, reject) => {
			let filterData;
  		setTimeout(() => {
				if(city.length){
					filterData = data.filter(item=>{
						return city.indexOf(item.toCity) && city.indexOf(item.fromCity);
					})
				} else{
					filterData = data;
				}
        resolve(filterData);
      }, delay);
  	});
  }
}

export default FlightsApi;
