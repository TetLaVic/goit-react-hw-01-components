import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={styles.statusGreen}></span>
      ) : (
        <span className={styles.statusRed}></span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </>
  );
};

export default FriendListItem;
