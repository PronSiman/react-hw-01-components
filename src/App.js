import React, { Fragment } from 'react';
import User from './User/User';
import Statistics from './Statistics/Statistics';
import userData from './User/user.json';
import statisticalData from './Statistics/statistical-data.json';

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
      <Statistics title="Upload stats" stats={statisticalData} />
    </Fragment>
  );
}

export default App;
