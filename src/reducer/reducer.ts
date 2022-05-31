
const defaultState = {
    tasks: [],
    returnTask: []
}
export function reducer(state:any = defaultState, action:any) {
    switch(action.type) {
        case 'GET_TASKS':{
            return { ...state, tasks: [...state.tasks,...action.payload], returnTask: [...state.returnTask,...action.payload]};
        }
        case "ADD_TASK":
            console.log(action.payload)
            return { ...state.tasks, tasks: [{...action.payload}, ...state.tasks]  };
        case "DEL_TASK":
            return { ...state, tasks: state.tasks.filter((i:any) => i.id !== action.payload) };
        case "RETURN_TASK":
            return {...state, tasks: state.tasks = defaultState.tasks}
        default:
            return state;
    }
}
export const getTasksAction = (payload:any) => ({type:'GET_TASKS', payload})
