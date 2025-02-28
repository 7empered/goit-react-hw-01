import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css'

export default function FriendList({ friends }) {
    return (
        <ul className={style.friendList}>
            {friends.map(friend => (
                <li className={style.FriendListItem} key={friend.id}>
		            <FriendListItem friend={friend} />
	            </li>
            ))}
        </ul>
    )
}