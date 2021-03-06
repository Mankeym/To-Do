import './Header.css'
import {useDispatch, useSelector} from "react-redux";


export function Header(){
    const state:any = useSelector(state => state);
    const dispatch = useDispatch()
    const date = new Date()
    const buttons = document.querySelectorAll('.header__button')
    const activeChecked = (e:any) =>{
        if(state.checked === false){
            dispatch({type: 'ACTIVE_CHECKED'})
        }
    }
    const disabledChecked = (e:any) =>{
        if(state.checked === true){
            dispatch({type: 'DISABLED_CHECKED'})
        }
    }
    return (
        <div className={'header'}>
            <div className={'header__container'}>
                <button onClick={(e)=>disabledChecked(e)} className={state.checked === false ? 'header__button active' : 'header__button'}>Активные задачи</button>
                <div>
                    <h2 className={'header__title'}>To-Do</h2>
                    <p className={'header__date'}>{date.toDateString()}</p>
                </div>
                <button onClick={(e)=> activeChecked(e)} className={state.checked === true ? 'header__button active' : 'header__button'}>Выполненные задачи</button>
            </div>
        </div>
    );
}
