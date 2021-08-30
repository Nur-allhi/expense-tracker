import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import UserProvider from "./app/Context/userContext";
import DrawerNevigations from './app/nevigation/drawerNevigation';

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <DrawerNevigations />
      </NavigationContainer>
    </UserProvider>
  )
}

export default App;




