import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserContext } from './../Context/userContext';

export default function ExpenseTable({ catagory, amount, time, note }) {
    const { expenseData } = useContext(UserContext);
    console.log(expenseData)



    return (
        <View>
            <View style={styles.wrapper}>

                <View style={styles.sectionOne}>
                    <View style={styles.catagoryContainer}>
                        <Text style={styles.catagoryText}>
                            {catagory.slice(0, 3)+ '..'}
                        </Text>
                    </View>
                    <View style={styles.detailsConatiner}>
                        <Text>
                            {time}
                        </Text>
                        <Text>
                            {note.substring(0, 15) + '...'}
                        </Text>
                    </View>
                </View>


                <View style={styles.sectionTwo}>
                    <Text style={styles.expenseAmount}>
                        {amount}
                    </Text>
                </View>
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#93B5C6",
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 8,
    },
    sectionOne: {
        backgroundColor: "white",
        paddingVertical: 10,
        flexDirection: "row",
        borderRadius: 10,
        padding: 5,
        width: "70%",
    },
    catagoryContainer: {
        padding: 5,
        // elevation: 10,

        borderRadius: 10,
        justifyContent: "center",
        marginRight: 10,
    },
    catagoryText: {
        fontSize: 25,
        fontWeight: "600",

    },
    detailsConatiner: {

    },
    sectionTwo: {
        alignItems: "center",
        padding: 5,
        backgroundColor: "white",
        borderRadius: 10,
        // width: "20%",

    },
    expenseAmount: {
        fontSize: 30,
        fontWeight: "600",

    },
})
