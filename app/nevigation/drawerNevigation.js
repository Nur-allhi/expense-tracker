import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import Allbalances from './../screens/allbalance';
import AllExpenses from './../screens/allExpenses';


const Drawer = createDrawerNavigator();

const DrawerNevigations = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Expenses" component={AllExpenses} />
            <Drawer.Screen name="Balances" component={Allbalances} />
        </Drawer.Navigator>
    )
}

export default DrawerNevigations

