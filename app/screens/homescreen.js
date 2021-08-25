import React, { useContext } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserContext } from './../Context/userContext';

function Homescreen(props) {
    const { balance } = useContext(UserContext)

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E1E5EA"
                translucent={true}
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
                    <Text style={styles.balanceAmount}>${balance}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.spendings}>
                    <Text style={styles.spendingTitle}>Total spendings</Text>
                    <Text style={styles.spendingAmount}>- $320.60</Text>
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
        backgroundColor: "#E1E5EA",

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
        backgroundColor: "#64C9CF",
        justifyContent: "center",
        alignItems: "center"

    },
    balnceTitile: {
        fontSize: 16,
        color: "#fff",
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
        backgroundColor: "#588C73",
        justifyContent: "center",
        alignItems: "center"

    },
    spendingTitle: {
        fontSize: 16,
        color: "#fff",

    },
    spendingAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },

})

export default Homescreen;