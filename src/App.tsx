import React, { useState } from 'react';
import { MyTabs } from './components/component/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Default } from './components/views/Default';
import { DataFactory } from './models/api/data/DataFactory';
import { userContext } from './utils/context';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(DataFactory.createUser(0, '', '', '', '', ''));

  return (
    <QueryClientProvider client={queryClient}>
      <userContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavigationContainer>
          {currentUser.getToken() ? <MyTabs /> : <Default />}
        </NavigationContainer>
      </userContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
