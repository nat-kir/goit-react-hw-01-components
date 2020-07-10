import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../components/task1/Profile_default_image.png';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => (
  <ul>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.listItem} key={id}>
        <span className={styles[isOnline]}>{isOnline}</span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.defaultProps = {
  avatar: defaultImage,
};

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsList;
