import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import Allbalances from './../screens/allbalance';
import AllExpenses from './../screens/allExpenses';
import StackNavigations from "./stackNavigations";

const Drawer = createDrawerNavigator();

const DrawerNevigations = () => {
    // drawerContent={props => <DrawerContent {...props} />}
    
    return (
        <Drawer.Navigator
             initialRouteName="Home">
            <Drawer.Screen name="Home" component={StackNavigations} />
            <Drawer.Screen name="Balances" component={Allbalances} />
            <Drawer.Screen name="Expenses" component={AllExpenses} />
        </Drawer.Navigator>
    )
}

export default DrawerNevigations

