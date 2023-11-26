import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";


const FriendMessage = (props: MessagePropsType) => {
    const {avatar, name} = props.message.user
    const {text, time} = props.message.message
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={avatar}
                    alt={name}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                          <div className={s.tail}></div>
                        {text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {time}
            </div>
        </div>
    )
}

export default FriendMessage
