import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { UserContext } from './app/Context/userContext';
import Tabs from './app/nevigation/tab';

function App() {
  const [balance, setBalance] = useState('')

  // useEffect(() => {
  //   console.log("App.js =", balance)
  // }, [])

  return (
    <>
      <UserContext.Provider value={{ balance, setBalance }}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </UserContext.Provider>

    </>
  )
}

export default App;




