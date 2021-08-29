import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AddEpenses from '../screens/addEpenses';
import AddMoney from './../screens/addMoney';
import Homescreen from './../screens/homescreen';


const stack = createStackNavigator();

function StackNavigations() {

    return (
        <stack.Navigator headerMode="none">
            <stack.Screen name="Home" component={Homescreen} />
            <stack.Screen name="AddBalance" component={AddMoney} />
            <stack.Screen name="AddExpense" component={AddEpenses} />
        </stack.Navigator>
    )
}

export default StackNavigations;
