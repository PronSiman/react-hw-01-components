import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import s from './User.module.scss';

const User = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={s.Profile}>
      <div className={s.Description}>
        <img src={avatar} alt={name} className={s.Avatar} />
        <p className={s.Name}>{name}</p>
        <p className={s.Tag}>{tag}</p>
        <p className={s.Location}>{location}</p>
      </div>
      <ul className={s.Stats}>
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default User;
