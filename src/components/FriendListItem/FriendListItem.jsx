import clsx from 'clsx';
import css from './FriendListItem.module.css'



export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;

    return (
        <div className={css.friendListItem} >
            <img src={avatar} alt={name} width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx({ [css.online]: isOnline, [css.offline]: !isOnline })}>
                {isOnline ? "Online" : "Ofline"}
            </p>
        </div>

    );
}