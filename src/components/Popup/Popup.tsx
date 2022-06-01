import './Popup.css'
import {taskNewType} from "../../interface/interface";
import {useDispatch, useSelector} from "react-redux";

export const Popup = ()=>{
    const state:any = useSelector(state => state)

    const dispatch = useDispatch()
    const closePopup = () =>{
        const popup:any = document.querySelector('.popup')
        if(popup.classList.contains('active')){
            popup.classList.remove('active')
        }
    }
    const submitForm = (e:any) => {
        e.preventDefault()
        console.log()
        const taskNew:taskNewType = {
            userId: 10,
            id: state.tasks.length,
            title: e.target.task.value,
            completed: false,
            Date: e.target.date.value.split('-').reverse().join('.'),
        }
        dispatch({type: 'ADD_TASK', payload:taskNew })
        closePopup()
        e.target.task.value = ''
    }
    const changeInput = (e:any) =>{

        console.log(e.currentTarget.value.length)
        const buttonClose:any = document.getElementById('button-submit')
        if(e.currentTarget.value){
            if(buttonClose.classList.contains('disabled')){
                buttonClose.classList.remove('disabled')
            }
            buttonClose.disabled = false
        } else {
            if(!buttonClose.classList.contains('disabled')){
                buttonClose.classList.add('disabled')
            }
            buttonClose.disabled = true
        }
    }
    return (
        <div className={'popup'}>
            <div className={'popup__container'}>
                <button onClick={()=> closePopup()} className={'popup__button-close'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path d="M41.5709 13.2865L29.0001 25.8573L16.4293 13.2865L13.2866 16.4292L25.8574 29L13.2866 41.5708L16.4293 44.7135L29.0001 32.1427L41.5709 44.7135L44.7136 41.5708L32.1428 29L44.7136 16.4292L41.5709 13.2865Z" fill="white"/>
                    </svg>
                </button>
                <form className={'popup__form'} onSubmit={(e)=> submitForm(e)}>
                    <h3 className={'popup__title'}>Новая задача</h3>
                    <span style={{width:"100%",textAlign:"left", fontSize:'23px', marginBottom:"15px", fontWeight:"bold"}}>Название задачи:</span>
                    <input onChange={(e)=> changeInput(e)}  name={"task"} placeholder={'Введите название'} className={'popup__input'} />
                    <span style={{width:"100%", textAlign:"left", fontSize:'23px', marginBottom:"15px", fontWeight:"bold"}}>Срок выполнения:</span>
                    <input type={"date"} id={'date'} placeholder={'ntcn'} className={'popup__input'} required={true}/>
                    <button type={'submit'} className={'popup__button disabled'} id={'button-submit'} disabled={true}>Добавить</button>
                </form>
            </div>
        </div>
    )
}
