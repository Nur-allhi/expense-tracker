import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { UserContext } from './app/Context/userContext';
import AddEpenses from './app/screens/addEpenses';
import AddMoney from './app/screens/addMoney';
import Homescreen from './app/screens/homescreen';


const StackNavigation = createStackNavigator();

function App() {
  const [balance, setBalance] = useState('')

  const StackScreen = () => (
    <StackNavigation.Navigator>
      <StackNavigation.Screen name="Home" component={Homescreen} />
      <StackNavigation.Screen name="AddBalance" component={AddMoney} />
      <StackNavigation.Screen name="AddExpense" component={AddEpenses} />
    </StackNavigation.Navigator>
  )


  return (
    <UserContext.Provider value={{ balance, setBalance }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </UserContext.Provider>
  )
}

export default App;




