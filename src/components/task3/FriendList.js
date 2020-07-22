import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import ListItem from './ListItem';

const FriendsList = ({ friends }) => (
  <ul>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={styles.listItem} key={id}>
        <ListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;
