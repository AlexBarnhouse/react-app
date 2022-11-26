import { useState } from 'react';
import { ListItem } from '../ListItem/ListItem';
import style from './ChatList.module.scss'
const ChatList = () => {
    const [ChatList, setChatList] = useState([
        {
            id: 1,
            name: 'Alex',
        },
        {
            id: 2,
            name: 'Kira',
        },
        {
            id: 3,
            name: 'Sofa',
        },
        {
            id: 4,
            name: 'Kate',
        },
    ]);

    return (
        <ul className={style.ul}>
            {ChatList.map((chatItemData) => {
                return (
                    <ListItem chatItemData={chatItemData} />
                );
            })}
        </ul>
    );
}

export { ChatList }