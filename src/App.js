import React, { Fragment } from 'react';
import User from './User/User';
import userData from './User/user.json';

const { name, tag, location, avatar, stats } = userData;

function App() {
  return (
    <Fragment>
      <User
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </Fragment>
  );
}

export default App;
