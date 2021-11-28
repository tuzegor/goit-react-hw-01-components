import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <div className={s.friendsCard}>
      <h1 className={s.title}>Friends</h1>
      <ul className={s.friendList}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;
