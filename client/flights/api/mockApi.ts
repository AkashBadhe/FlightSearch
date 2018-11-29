import Promise from "ts-promise";
import delay from './delay';


const data = [
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: 'Sunday 3 March',
		arrival: 'Monday 5 March',
		airline: 'Air Asia, Jetstar',
		price: 360,
	},
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: 'Sunday 3 March',
		arrival: 'Monday 5 March',
		airline: 'IndiGo (6E)',
		price: 380,
	},
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: 'Sunday 3 March',
		arrival: 'Monday 5 March',
		airline: 'Air India (AI)',
		price: 340,
	},
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: 'Sunday 3 March',
		arrival: 'Monday 5 March',
		airline: 'British Airways (BA)',
		price: 330,
	},
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: 'Sunday 3 March',
		arrival: 'Monday 5 March',
		airline: 'Emirates (EK)',
		price: 310,
	},
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: 'Sunday 3 March',
		arrival: 'Monday 5 March',
		airline: 'GoAir (G8)',
		price: 220,
	},
	{
		id:1,
		fromCity: 'From City 1',
		toCity: 'To City 1',
		departure: 'Sunday 3 March',
		arrival: 'Monday 5 March',
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