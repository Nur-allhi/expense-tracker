import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UserContext } from './../Context/userContext';
import SuccessModal from './successModal';

const AddEpenses = () => {
    const { totalExpense, setTotalExpense, expenseData, setExpenseData, successModal, setSuccessModal } = useContext(UserContext)

    const { control, handleSubmit, reset } = useForm();


    useEffect(() => {
        saveExpenseDataToThedevice(expenseData);
    }, [expenseData])

    useEffect(() => {
        saveTotalExpenseToDevice(totalExpense);
    }, [totalExpense])

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    const onSubmit = (data) => {
        const { expenseAmount, expenseCatagory, expenseNote } = data

        const newExpenseEntry = {
            time: formatAMPM(new Date),
            date: new Date(),
            id: Math.random(),
            expenseAmount: parseFloat(expenseAmount),
            expenseCatagory: expenseCatagory,
            expenseNote: expenseNote

        }
        setExpenseData([...expenseData, newExpenseEntry])
        Keyboard.dismiss()
        reset()
        setSuccessModal(true);
    };

    const saveExpenseDataToThedevice = async (expenseData) => {
        try {
            const stringyfyData = JSON.stringify(expenseData)
            if (stringyfyData != null) {
                await AsyncStorage.setItem("ExpenseData", stringyfyData)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        const arrayTotalExpense = expenseData.reduce((acc, formEntry) => {
            return acc + formEntry.expenseAmount;
        }, 0)
        setTotalExpense(arrayTotalExpense)
    }, [expenseData])


    const saveTotalExpenseToDevice = async (totalExpense) => {
        try {
            const stringyfyData = JSON.stringify(totalExpense)
            if (stringyfyData != null) {
                await AsyncStorage.setItem("TotalExpense", stringyfyData)
            }
        } catch (error) {
            console.log(error)
        }
    }




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
                    name="expenseAmount"
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
                <SuccessModal />
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
