import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileDescr}>
        <img src={image} alt="User avatar" className={s.profileImg} />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span className={s.statsLabel}>Followers</span>
          <span className={s.statsQuantity}>{stats.followers}</span>
        </li>

        <li>
          <span className={s.statsLabel}>Views</span>
          <span className={s.statsQuantity}>{stats.views}</span>
        </li>

        <li>
          <span className={s.statsLabel}>Likes</span>
          <span className={s.statsQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
