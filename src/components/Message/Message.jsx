import style from './Message.module.scss'
const Message = (props) => {


    return <>
        {props.message.map((item) => {
            return (
                <div key={item.id}>
                    <p className={style.author}>{item.author}</p>
                    <p className={style.text}>{item.text}</p>
                </div>
            )
        })}
    </>
}

export { Message }