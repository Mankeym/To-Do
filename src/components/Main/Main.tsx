import './Main.css'
import {useDispatch, useSelector} from "react-redux";
import {taskNewType} from '../../interface/interface'


export function Main(){
    const task:any = useSelector(state => state)
    const dispatch:any = useDispatch()
    function disabledTask(t:any){
        dispatch({type: 'COMPLETED_TASK', payload: t.id})
    }
    function deletedTask(t:any){
        dispatch({type: 'DELETED_TASK', payload: t.id})

    }
    const openPopup = () =>{
        const popup:any = document.querySelector('.popup')
        const dateToday:any = new Date();
        const dateTest:any = document.getElementById('date')
        dateTest.valueAsDate = dateToday
        popup.classList.add('active')
    }
    /*
    function addTask(t:any){

        const taskNew:taskNewType = {
            userId: 10,
            id: Math.random(),
            title: t,
            completed: false
        }
        dispatch({type: 'ADD_TASK', payload:taskNew })
    }*/

    function returnTask(){
        dispatch({type: 'RETURN_TASK', payload: task.returnTask})
    }

    return (

        <div className={'main'}>
            <div className={"main__container"}>
                { task.checked === false && (
                    <div style={{display:'flex'}} className={"main__button-container"}>
                        <button onClick={()=> openPopup()} style={{fontSize:"2rem"}}>Добавить задачу!</button>
                        <button onClick={()=> returnTask()} style={{fontSize:"2rem"}} >Очистить</button>
                    </div>
                )}


                <div className={'main__cards'}>
                    {  (task.tasks.length > 0 && task.checked == false) &&(
                        task.tasks.map((item:any)=>
                            !item.completed && (
                            <div className={'main__card'}>
                                <h3 className={'main__card-name'}>
                                    {item.title}
                                </h3>
                                <p style={{fontSize:'1rem', fontWeight:'bold', margin:'0'}}>Срок выполнения: {item.Date}</p>
                                <button className={'main__card-button'} onClick={()=> disabledTask(item)} ><p>+</p></button>
                            </div> )
                        ))
                    }
                    {  (task.tasks.length > 0 && task.checked == true) &&(
                        task.tasks.map((item:any)=>
                            item.completed && (
                                <div className={'main__card'}>
                                    <h3 className={'main__card-name'}>
                                        {item.title}
                                    </h3>
                                    <p style={{fontSize:'1rem', fontWeight:'bold', margin:'0'}}>Срок выполнения: {item.Date}</p>
                                    <button onClick={()=> deletedTask(item)} className={'main__card-button'}><p style={{transform:'rotate(45deg);'}}>+</p></button>
                                </div> )
                        ))
                    }

                </div>
            </div>
        </div>
    );
}
