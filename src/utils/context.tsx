import React from 'react';
import { DataFactory } from '../models/api/data/DataFactory';

export const userContext = React.createContext({
  currentUser: DataFactory.createUser(0, '', '', '', '', ''),
  setCurrentUser: (currentUser) => {},
});
