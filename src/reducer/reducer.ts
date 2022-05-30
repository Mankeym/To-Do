

const defaultState = {
    tasks: []
}
export function reducer(state:any = defaultState, action:any) {
    switch(action.type) {
        case 'GET_TASKS':{
            return { ...state, tasks: [...state.tasks,...action.payload] };
        }

        case "DEL_CASH":
            return { ...state, cash: state.cash - action.payload };

        default:
            return state;
    }
}
export const getTasksAction = (payload:any) => ({type:'GET_TASKS', payload})
