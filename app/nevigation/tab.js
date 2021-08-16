import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Homescreen from '../screens/homescreen';
import { AddTransaction } from './../screens/addTransaction';
import { ExpenseGraph } from './../screens/expenseGraph';
import { Transaction } from './../screens/transaction';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOption={{
                showLabel: false,
                style: {
                    position: "absolute",
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    height: 70,
                    borderRadius: 15,
                    ...styles.shadow
                }
            }}
        >
            {/* options={{
                tabBarIcon: ({ focused }) => {

                }

            }} */}
            <Tab.Screen name="Home" component={Homescreen} />
            <Tab.Screen name="Log" component={Transaction} />
            <Tab.Screen name="Add" component={AddTransaction} />
            <Tab.Screen name="Graph" component={ExpenseGraph} />
        </Tab.Navigator>
    )
}



const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})
export default Tabs;
