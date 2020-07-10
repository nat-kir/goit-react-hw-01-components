import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './Profile_default_image.png';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <img className={styles.avatar} src={avatar} alt={name} width="200" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <p className={styles.label}>Followers</p>
        <p className={styles.quantity}>{stats.followers}</p>
      </li>
      <li className={styles.statsItem}>
        <p className={styles.label}>Views</p>
        <p className={styles.quantity}>{stats.views}</p>
      </li>
      <li className={styles.statsItem}>
        <p className={styles.label}>Likes</p>
        <p className={styles.quantity}>{stats.likes}</p>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
