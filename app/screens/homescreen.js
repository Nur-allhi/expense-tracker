import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Homescreen(props) {
    return (
        <View style={styles.container}>
            {/* <Text>
                Home
            </Text> */}
            <StatusBar
                backgroundColor="#FDFAF6"
                barStyle="dark-content"
            />
            <View style={styles.userSectionWrapper}>
                <Image style={styles.userImage} source={require('../assets/external/user.png')} />
                <Text style={styles.userName}>
                    Hi, Eftynur
                </Text>
            </View>
            <View style={styles.currentStatusWrapper}>
                <TouchableOpacity style={styles.balance}>
                    <Text style={styles.balnceTitile}>Total Balance</Text>
                    <Text style={styles.balanceAmount}>$1390.50</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.spendings}>
                    <Text style={styles.spendingTitle}>Total spendings</Text>
                    <Text style={styles.spendingAmount}>- $320.60</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addInputWrapper}>
                <View style={styles.addMoney}></View>
                <View style={styles.addExpense}></View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        // backgroundColor: "#595260",
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
        backgroundColor: "#B5EAEA",
        justifyContent: "center",
        alignItems: "center"

    },
    balnceTitile: {
        fontSize: 16,
    },
    balanceAmount: {
        fontSize: 20,
        fontWeight: "bold"

    },
    spendings: {
        width: "45%",
        height: 100,
        borderRadius: 15,
        backgroundColor: "#FE9898",
        justifyContent: "center",
        alignItems: "center"

    },
    spendingTitle: {
        fontSize: 16,
    },
    spendingAmount: {
        fontSize: 20,
        fontWeight: "bold"
    },
    addInputWrapper: {
        paddingVertical: 15,
        position: 'absolute',
        bottom: 30,
        right: 15,
        borderRadius: 20,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 8,
        // },
        // shadowOpacity: 0.44,
        // shadowRadius: 10.32,

        // elevation: 16,
        backgroundColor: "#FDF6F0"
    },
    addMoney: {
        height: 50,
        width: 50,
        borderRadius: 20,
        backgroundColor: "#055052",
        marginBottom: 10,
    },
    addExpense: {
        height: 50,
        width: 50,
        borderRadius: 20,
        backgroundColor: "#B61919",
    },
})

export default Homescreen;