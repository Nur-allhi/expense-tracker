import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import UserProvider from "./app/Context/userContext";
import StackNavigations from './app/nevigation/stackNavigations';


function App() {
  // const { setTotalBalance } = useContext(UserContext);

  return (
    <UserProvider>
      <NavigationContainer>
        <StackNavigations />
      </NavigationContainer>
    </UserProvider>
  )
}

export default App;




