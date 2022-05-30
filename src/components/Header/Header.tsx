import './Header.css'


export function Header(){
    const date = new Date()
    return (
        <div className={'header'}>
            <div className={'header__container'}>
                <h2 className={'header__title'}>To-Do</h2>
                <p className={'header__date'}>{date.toDateString()}</p>
            </div>
        </div>
    );
}
