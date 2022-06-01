import {state} from '../interface/interface'


const defaultState: state = {
    tasks: [],
    returnTask: [],
    checked: false
}
export function reducer(state:any = defaultState, action:any) {
    switch(action.type) {
        case 'GET_TASKS':{
            return { ...state, tasks: [...state.tasks,...action.payload], returnTask: [...state.returnTask,...action.payload]};
        }
        case "ADD_TASK":
            return { ...state, tasks: [{...action.payload}, ...state.tasks], checked: state.checked = false  };
        case "COMPLETED_TASK":
            return {...state, tasks: [...state.tasks.map((item:any)=> {
                if(item.id === action.payload && item.completed === false){
                    item.completed = true
                    return item
                }
                if(item.id === action.payload && item.completed === true){
                    item.completed = false
                    return item
                } return item
                 })]};
        case "RETURN_TASK":
            return {...state, tasks: state.tasks.map((item:any)=>{
                item.completed = true;
                return item
                })}
        case "ACTIVE_CHECKED":
            return {...state, checked: state.checked = true, }
        case "DISABLED_CHECKED":
            return {...state, checked: state.checked = false}
        case "DELETED_TASK":
            return {...state,tasks: state.tasks.filter((i:any)=> i.id != action.payload)}
        default:
            return state;
    }
}
export const getTasksAction = (payload:any) => ({type:'GET_TASKS', payload})
