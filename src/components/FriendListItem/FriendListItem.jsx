import "../../css/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? "Online" : "Offline";
  const statusClass = isOnline ? "status online" : "status offline";

  return (
    <div className="friend-list-wrapper">
      <img src={avatar} alt="Image" />
      <p className="list-name">{name}</p>
      <p className={statusClass}>{statusText}</p>
    </div>
  );
};

export default FriendListItem;
