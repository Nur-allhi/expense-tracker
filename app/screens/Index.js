import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { UserContext } from './../Context/userContext';
import AddEpenses from './addEpenses';
import AddMoney from './addMoney';
import Homescreen from './homescreen';

const StackNavigation = createStackNavigator();

const StackScreen = () => (
    <StackNavigation.Navigator headerMode="none">
        <StackNavigation.Screen name="Home" component={Homescreen} />
        <StackNavigation.Screen name="AddBalance" component={AddMoney} />
        <StackNavigation.Screen name="AddExpense" component={AddEpenses} />
    </StackNavigation.Navigator>
)

export default () => {
    const [totalbalance, setTotalBalance] = useState('')
    const [totalExpense, setTotalExpense] = useState('')

    // useEffect(() => {
    //     GetSavedBalanceDataFromDevie();
    // }, [])

    // useEffect(() => {
    //     saveToDeviceBalanceData();
    // }, [totalbalance])
    
    // const saveToDeviceBalanceData = async (totalbalance) => {
    //     try {
    //         const stringyfyBalanceData = JSON.stringify(totalbalance)
    //         await AsyncStorage.setItem('BalanceData', stringyfyBalanceData)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const GetSavedBalanceDataFromDevie = async () => {
    //     try {
    //         const balance = await AsyncStorage.getItem('BalanceData');
    //         if (balance != null) {
    //             setTotalBalance(JSON.parse(balance))
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <UserContext.Provider
            value={
                {
                    Balance: { totalbalance, setTotalBalance },
                    Expense: { totalExpense, setTotalExpense }
                }
            }>
            <NavigationContainer>
                <StackScreen />
            </NavigationContainer>
        </UserContext.Provider >
    );

};