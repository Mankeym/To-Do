import {getTasksAction} from "../reducer/reducer";

export const fetchTasks = () =>{
    return function (dispatch:any) {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => dispatch(getTasksAction(json)))
    }
}
