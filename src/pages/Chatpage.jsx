import { useState, useRef } from "react";
import { Message } from '../components/Message/Message'

const Chatpage = () => {
    const [messageList, setMessageList] = useState([]);
    const inputRef = useRef(null);
    const sendMess = (e) => {
        e.preventDefault()
        if (e.target.elements.message.value !== '') {
            setMessageList([...messageList, {
                id: messageList.length,
                author: 'User',
                text: e.target.elements.message.value,
            }])
            e.target.elements.message.value = '';
        }
    }

    return <>
        <Message message={messageList} />
        <form className="messageForm" onSubmit={sendMess}>
            <input inputRef={inputRef} name="message" />
            <button>Send message</button>
        </form>
    </>
}

export { Chatpage }