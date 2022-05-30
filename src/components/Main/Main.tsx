import './Main.css'
import {store} from "../../store/store";
import {useSelector} from "react-redux";

export function Main(){
    const task:any = useSelector(state => state)
    console.log(task.tasks)
    return (

        <div className={'main'}>
            <div className={"main__container"}>
                <div className={"main__button-container"}>
                </div>

                <div className={'main__cards'}>
                    {
                        task.tasks.map((item:any)=>
                            <div className={'main__card'}>
                                <h3 className={'main__card-name'}>
                                    {item.title}
                                </h3>

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
}
