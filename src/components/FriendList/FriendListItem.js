import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={s.item} id={id}>
      {isOnline ? (
        <span
          className={s.status}
          width="5"
          style={{ backgroundColor: 'green' }}
        ></span>
      ) : (
        <span
          className={s.status}
          width="5"
          style={{ backgroundColor: 'red' }}
        ></span>
      )}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
