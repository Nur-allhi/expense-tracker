import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UserContext } from './../Context/userContext';

const AddEpenses = () => {
    // Global States:
    const {
        totalbalance, setTotalBalance, totalExpense, setTotalExpense, expenseData,
        setExpenseData } = useContext(UserContext)


    // Local State:
    const [inputedExpense, setInputedExpense] = useState([])

    const { control, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const { formExpense, expenseCatagory, expenseNote } = data

        const newExpenseEntry = {
            formExpense: parseFloat(formExpense),
            expenseCatagory: expenseCatagory,
            expenseNote: expenseNote
        }
        setInputedExpense([...inputedExpense, newExpenseEntry])
        Keyboard.dismiss()
        reset()
    };

    useEffect(() => {
        const arrayTotalExpense = inputedExpense.reduce((acc, formEntry) => {
            return acc + formEntry.formExpense;
        }, 0)
        setTotalExpense(arrayTotalExpense)
        const currentBalance = totalbalance - arrayTotalExpense
        console.log("Line-38", arrayTotalExpense)
        console.log("line-39", totalbalance)
        setTotalBalance(currentBalance)
    }, [inputedExpense])



    
    return (
        <View style={styles.conatiner}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E1E5EA"
                translucent={true}
            />
            <Text style={styles.pageTitle}>
                New Expense
            </Text>

            <View style={styles.expenseForm}>

                {/* Amount */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.amountWrapper}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }} source={require('../assets/formIcon/expense.png')} />
                            <TextInput
                                keyboardType={'phone-pad'}
                                style={styles.amountField}
                                placeholder="Amount"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="formExpense"
                    defaultValue=""
                />
                {/* Catagory */}
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.catagoryWrapper}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }} source={require('../assets/formIcon/catagory.png')} />
                            <TextInput style={styles.catagoryField}
                                placeholder="Catagory"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="expenseCatagory"
                    defaultValue=""
                />
                {/* Notes */}
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.noteWrapper}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }} source={require('../assets/formIcon/note.png')} />
                            <TextInput style={styles.noteField}
                                placeholder="Notes"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="expenseNote"
                    defaultValue=""
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Add To Expense</Text>
                </TouchableOpacity>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: "#E1E5EA",
    },
    pageTitle: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    expenseForm: {
        top: 20,
        padding: 30,
        borderRadius: 16,

    },
    amountWrapper: {
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    amountField: {
        width: "80%",
        height: "100%",
        fontSize: 30,
        color: "red",
        paddingLeft: 20,
    },
    catagoryWrapper: {
        height: 70,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff"

    },
    catagoryField: {
        width: "80%",
        height: "90%",
        paddingLeft: 20,
    },
    noteWrapper: {
        height: 70,
        marginTop: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff"

    },
    noteField: {
        width: "80%",
        height: "90%",
        paddingLeft: 20,
    },
    submitButton: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#D83A56",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
    },


})


export default AddEpenses
