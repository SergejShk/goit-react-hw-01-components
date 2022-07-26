import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendlistItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span
        className={friend.isOnline ? styles.statusOnline : styles.statusOffline}
      >
        {friend.isOnline}
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

FriendlistItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendlistItem;
