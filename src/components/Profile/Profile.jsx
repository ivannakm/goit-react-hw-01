const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="profile-descr">
        <img src={image} alt="User avatar" className="profile-img" />
        <p className="profile-name">{name}</p>
        <p className="progile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="stats-label">Followers</span>
          <span className="stats-quantity">{stats.followers}</span>
        </li>

        <li>
          <span className="stats-label">Views</span>
          <span className="stats-quantity">{stats.views}</span>
        </li>

        <li>
          <span className="stats-label">Likes</span>
          <span className="stats-quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
