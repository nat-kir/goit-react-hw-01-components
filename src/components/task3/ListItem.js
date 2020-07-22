import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../components/task1/Profile_default_image.png';
import styles from './FriendsList.module.css';

const ListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={styles[isOnline]}>{isOnline}</span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

ListItem.defaultProps = {
  avatar: defaultImage,
};

ListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default ListItem;
