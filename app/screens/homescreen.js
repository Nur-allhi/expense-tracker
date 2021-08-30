import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from "../config/color";
import { UserContext } from './../Context/userContext';
import ExpenseTable from './expenseTable';



function Homescreen({ navigation }) {
    const { setTotalBalance, totalbalance,
        setBalanceData, balanceData,
        setTotalExpense, totalExpense,
        setExpenseData, expenseData } = useContext(UserContext)
    useEffect(() => {
        getTotalBalanceFromDevice();
        getTotalExpenseFromDevice();
        getBalanceDataFromTheDevice();
        getExpenseDataFromTheDevice();
    }, [])
    const getTotalBalanceFromDevice = async () => {
        try {
            const balance = await AsyncStorage.getItem("TotalBalance")
            if (balance != null) {
                setTotalBalance(balance)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getBalanceDataFromTheDevice = async () => {
        try {
            const balanceData = await AsyncStorage.getItem("BalanceData");
            if (balanceData != null) {
                setBalanceData(JSON.parse(balanceData))
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getTotalExpenseFromDevice = async () => {
        try {
            const expense = await AsyncStorage.getItem("TotalExpense")
            if (expense != null) {
                setTotalExpense(expense)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getExpenseDataFromTheDevice = async () => {
        try {
            const expenseData = await AsyncStorage.getItem("ExpenseData");
            if (expenseData != null) {
                setExpenseData(JSON.parse(expenseData))
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const clearAllData = () => {
    //     setTotalBalance('');
    //     setBalanceData([]);
    //     setTotalExpense('');
    //     setExpenseData([]);
    // }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E1E5EA"
                translucent={true}
            />
            <TouchableOpacity style={styles.userSectionWrapper}>
                <Image style={styles.userImage} source={require('../assets/external/user.png')} />
                <Text style={styles.userName}>
                    Hi, User
                </Text>
            </TouchableOpacity>
            <View style={styles.currentStatusWrapper}>
                <TouchableOpacity style={styles.balance}
                    onPress={() => navigation.push('AddBalance')}>
                    <Text style={styles.balnceTitile}>Total Balance</Text>
                    <Text style={styles.balanceAmount}>${totalbalance - totalExpense}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.spendings}
                    onPress={() => navigation.push('AddExpense')} >
                    <Text style={styles.spendingTitle}>Total spendings</Text>
                    <Text style={styles.spendingAmount}>- ${totalExpense}</Text>
                </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={{ alignItems: "center", marginTop: 10, }} onPress={() => clearAllData()}>
                <Text>Clear previous Data</Text>
            </TouchableOpacity> */}

            <View style={styles.expenseList}>
                <Text style={styles.expenseListHeader}>
                    Your Expenses Are
                </Text>
                <FlatList
                    contentContainerStyle={{ padding: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={expenseData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <ExpenseTable
                            catagory={item.expenseCatagory}
                            amount={item.expenseAmount}
                            time={item.time}
                            note={item.expenseNote}
                        />
                    }
                />
            </View>


            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.AddBalanceBtn}
                    onPress={() => navigation.push('AddBalance')}>
                    <Text style={styles.btnText}>Add Balance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.AddExpenseeBtn}
                    onPress={() => navigation.push('AddExpense')} >
                    <Text style={styles.btnText}>Add Expense</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        backgroundColor: color.containerBg,

    },
    userSectionWrapper: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    userImage: {
        width: 50,
        height: 50,
    },
    userName: {
        paddingHorizontal: 10,
        fontSize: 18,
        letterSpacing: 2,
    },
    currentStatusWrapper: {
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    balance: {
        width: "45%",
        height: 100,
        borderRadius: 15,
        backgroundColor: color.balnceBg,
        justifyContent: "center",
        alignItems: "center"

    },
    balnceTitile: {
        fontSize: 16,
        color: color.white,
    },
    balanceAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",

    },
    spendings: {
        width: "45%",
        height: 100,
        borderRadius: 15,
        backgroundColor: color.spendingsBg,
        justifyContent: "center",
        alignItems: "center"

    },
    spendingTitle: {
        fontSize: 16,
        color: color.white,

    },
    spendingAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: color.white,
    },
    btnContainer: {
        position: "absolute",
        flexDirection: 'row',
        width: "80%",
        bottom: 30,
        justifyContent: "space-around",
        alignSelf: "center",

    },
    AddBalanceBtn: {
        backgroundColor: color.addBalanceBtn,
        height: 50,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    AddExpenseeBtn: {
        backgroundColor: color.addExpensesBtn,
        height: 50,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    btnText: {
        color: color.btnTextColor,
    },
    expenseList: {
        backgroundColor: color.expenseListBg,
        marginTop: 30,
        height: "60%",
        padding: 10,
        borderRadius: 10,
        elevation: 10,

    },
    expenseListHeader: {
        fontSize: 20,
        textAlign: "center"
    },
})

export default Homescreen;