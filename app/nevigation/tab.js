import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AddEpenses from '../screens/addEpenses';
import AddMoney from '../screens/addMoney';
import Homescreen from '../screens/homescreen';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                keyboardHidesTabBar: true,
                style: {
                    position: "absolute",
                    bottom: 10,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    height: 90,
                    borderRadius: 15,
                    ...styles.shadow
                }
            }}
        >

            <Tab.Screen name="AddMoney" component={AddMoney} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // top: 10,
                    }}>
                        <Image source={require('../assets/icon/add.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#e32f45" : "#748c94"
                            }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94",
                            fontSize: 12
                        }}>Add Money</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Home" component={Homescreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // top: 10,
                    }}>
                        <Image source={require('../assets/icon/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#e32f45" : "#748c94"
                            }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94",
                            fontSize: 12
                        }}>Home</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="AddExpenses" component={AddEpenses} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // top: 10,
                    }}>
                        <Image source={require('../assets/icon/expenses.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#e32f45" : "#748c94"
                            }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94",
                            fontSize: 12
                        }}>Add Expenses</Text>
                    </View>
                ),
            }} />
            {/* <Tab.Screen name="Log" component={Transaction} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // top: 10,
                    }}>
                        <Image source={require('../assets/icon/transaction.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#e32f45" : "#748c94"
                            }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94",
                            fontSize: 12
                        }}>Transaction</Text>
                    </View>
                ),
            }} /> */}


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
