import React from 'react';
import Profile from './components/views/Profile';
import { DataFactory } from './models/data/DataFactory';

const App: React.FC = () => {
  return (
    <Profile
      user={DataFactory.createUser(0, 'test@test.com', '', 'Robert', 'Pirate', 'Red_Robert')}
    />
  );
};

export default App;
