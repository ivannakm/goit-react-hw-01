import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? "Online" : "Offline";

  return (
    <div className={css["friend-list-wrapper"]}>
      <img src={avatar} alt="Image" />
      <p className={css["list-name"]}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {statusText}
      </p>
    </div>
  );
};

export default FriendListItem;
