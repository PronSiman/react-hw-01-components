import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import s from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.FriendList}>
      {friends.map(item => {
        return (
          <FriendItem
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default FriendList;
