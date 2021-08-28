import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddEpenses from '../screens/addEpenses';
import AddMoney from './../screens/addMoney';
import Homescreen from './../screens/homescreen';


const StackNavigation = createStackNavigator();

function StackNavigations() {

    return (
        <StackNavigation.Navigator headerMode="none">
            <StackNavigation.Screen name="Home" component={Homescreen} />
            <StackNavigation.Screen name="AddBalance" component={AddMoney} />
            <StackNavigation.Screen name="AddExpense" component={AddEpenses} />
        </StackNavigation.Navigator>
    )
}

export default StackNavigations;
