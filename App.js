import { NavigationContainer } from '@react-navigation/native';
import React, { createContext, useState } from 'react';
import { LogBox } from 'react-native';
import Tabs from './app/nevigation/tab';


export const balanceContext = createContext();


function App() {
  const [balance, setBalance] = useState({})

  // console.log("TotalBalanceAppJS=", balance)

  LogBox.ignoreLogs([
    'Require cycle:'
  ]);
  return (
    <>
      <balanceContext.Provider value={{ balance, setBalance }}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </balanceContext.Provider>

    </>
  )
}

export default App;




