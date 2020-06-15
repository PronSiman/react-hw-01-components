import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import s from '../FriendList.module.scss';

const FriendItem = ({ name, avatar, isOnline }) => {
  const statusColor = {
    backgroundColor: isOnline ? `#00FF00` : `#DC143C`,
  };

  return (
    <li className={s.Item}>
      <span className={s.Status} style={statusColor} />
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.defaultProps = {
  avatar: 'http://dummyimage.com/120',
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
