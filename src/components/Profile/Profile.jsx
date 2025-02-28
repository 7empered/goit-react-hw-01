import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats: { followers, views, likes }, }) => {
    return (
        <div className={css.profile}>
            <div className={css.info}>
                <img className={css.avatar} src={image} alt="User avatar" />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.item}>
                    <span className={css.itemInfo}>Followers</span>
                    <span className={css.itemNumbers}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemInfo}>Views</span>
                    <span className={css.itemNumbers}>{views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemInfo}>Likes</span>
                    <span className={css.itemNumbers}>{likes}</span>
                </li>
            </ul>
        </div>


    );
};

export default Profile;