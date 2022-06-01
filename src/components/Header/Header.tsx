import './Header.css'
import {useDispatch, useSelector} from "react-redux";


export function Header(){
    const state:any = useSelector(state => state);
    const dispatch = useDispatch()
    const date = new Date()
    const activeChecked = () =>{
        if(state.checked === false){
            dispatch({type: 'ACTIVE_CHECKED'})
        }
    }
    const disabledChecked = () =>{
        if(state.checked === true){
            dispatch({type: 'DISABLED_CHECKED'})
        }
    }
    return (
        <div className={'header'}>
            <div className={'header__container'}>
                <button onClick={()=>disabledChecked()} className={"header__button"}>Активные задачи</button>
                <div>
                    <h2 className={'header__title'}>To-Do</h2>
                    <p className={'header__date'}>{date.toDateString()}</p>
                </div>
                <button onClick={()=> activeChecked()} className={"header__button"}>Выполненные задачи</button>
            </div>
        </div>
    );
}
