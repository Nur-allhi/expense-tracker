import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UserProvider from "./app/Context/userContext";
import DrawerNevigations from './app/nevigation/drawerNevigation';
import StackNavigations from './app/nevigation/stackNavigations';



const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="App" component={StackNavigations} />
    <RootStack.Screen name="SideBar" component={DrawerNevigations} />
  </RootStack.Navigator>
)
function App() {



  return (
    <UserProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </UserProvider>
  )
}

export default App;




