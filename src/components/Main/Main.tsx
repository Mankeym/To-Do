import './Main.css'
import {store} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTasks} from "../../asyncActions/tasks";

export function Main(){
    const task:any = useSelector(state => state)
    const dispatch:any = useDispatch()
    function deleteTask(t:any){
        dispatch({type: 'COMPLETED_TASK', payload: t.id})
        console.log(task)
    }
    interface taskNewType {
        userId: number;
        id: number;
        title: string;
        completed:boolean;
    }
    function addTask(t:any){

        const taskNew:taskNewType = {
            userId: 10,
            id: Math.random(),
            title: t,
            completed: false
        }
        dispatch({type: 'ADD_TASK', payload:taskNew })
    }

    function returnTask(){
        dispatch({type: 'RETURN_TASK', payload: task.returnTask})
    }

    return (

        <div className={'main'}>
            <div className={"main__container"}>
                <div style={{display:'flex'}} className={"main__button-container"}>
                    <button onClick={()=> addTask(prompt())} style={{fontSize:"2rem"}}>Добавить задачу!</button>
                    <button onClick={()=> returnTask()} style={{fontSize:"2rem"}} >Очистить</button>
                </div>

                <div className={'main__cards'}>
                    {  task.tasks.length > 0 ?
                        task.tasks.map((item:any)=>
                            !item.completed && (
                            <div className={'main__card'}>
                                <h3 className={'main__card-name'}>
                                    {item.title}
                                </h3>
                                <button onClick={()=> deleteTask(item)} style={{fontSize:"3rem"}}>+</button>
                            </div> )
                        ) : <div>
                            Задач нет
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}
