import Promise from "ts-promise";
import delay from './delay';


const data = [
	{
		id:1,
		text: "Task 1",
		completed: false
	},
	{
		id:2,
		text: "Task 2",
		completed: false
	},
	{
		id:3,
		text: "Task 3",
		completed: false
	},
	{
		id:4,
		text: "Task 4",
		completed: false
	}
];

class CourseApi {
  static saveToDo(title: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({text: title, completed: false});
      }, delay);
    });
  }

  static getToDos(){
  	return new Promise((resolve, reject) => {
  		setTimeout(() => {
        resolve(data);
      }, delay);
  	});
  }
}

export default CourseApi;
