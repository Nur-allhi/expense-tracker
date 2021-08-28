import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UserContext } from './../Context/userContext';


const AddMoney = () => {
    const { control, handleSubmit, reset } = useForm();
    const {
        totalbalance, setTotalBalance, balanceData, setBalanceData,
    } = useContext(UserContext)

    useEffect(() => {
        getBalanceDataFromTheDevice();
    }, [])

    useEffect(() => {
        saveTotalbalanceToDevice(totalbalance)
    }, [totalbalance])

    useEffect(() => {
        saveDataToThedevice(balanceData);
    }, [balanceData])

    const onSubmit = (data) => {
        const { formBalance, title } = data
        const newBalanceEntry = {
            formBalance: parseFloat(formBalance),
            title: title
        }
        setBalanceData([...balanceData, newBalanceEntry])
        Keyboard.dismiss()
        reset("")
        // setBalanceData([])
    };

    useEffect(() => {
        const arraybalanceTotal = balanceData.reduce((acc, formEntry) => {
            return acc + formEntry.formBalance;
        }, 0)
        setTotalBalance(arraybalanceTotal);
    }, [balanceData])




    const saveDataToThedevice = async (balanceData) => {
        try {
            const stringyfyData = JSON.stringify(balanceData)
            if (stringyfyData != null) {
                await AsyncStorage.setItem("BalanceData", stringyfyData)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const saveTotalbalanceToDevice = async (totalbalance) => {
        try {
            const stringyfyTotalbalanceData = JSON.stringify(totalbalance)
            if (stringyfyTotalbalanceData != null) {
                await AsyncStorage.setItem("TotalBalance", stringyfyTotalbalanceData)
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
                console.log("Successfully got the data")

            }
        } catch (error) {
            console.log("Taking balance Data from device =", error)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#E1E5EA"
                translucent={true}
            />
            <Text style={styles.screenTitle}>
                Add money
            </Text>
            <View style={styles.addMoneyForm}>
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
                            }} source={require('../assets/formIcon/salary.png')} />
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
                    name="formBalance"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.titleWrapper}>
                            <Image style={{
                                width: 40,
                                height: 40,
                            }} source={require('../assets/formIcon/tag.png')} />
                            <TextInput
                                style={styles.titleField}
                                placeholder="Where you get those?"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="title"
                    defaultValue=""
                />
                <TouchableOpacity style={styles.addMoneyButton} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Add to Balance</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: "#E1E5EA",

    },
    screenTitle: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    addMoneyForm: {
        top: 50,
        padding: 30,
        borderRadius: 16,
    },
    amountWrapper: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    amountField: {
        width: "80%",
        height: "90%",
        marginTop: 10,
        paddingLeft: 20,
        color: "#297F87",
        fontSize: 40,
    },
    titleWrapper: {
        height: 70,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",

    },
    titleField: {
        width: "80%",
        height: "90%",
        paddingLeft: 20,
        fontSize: 20,

    },
    addMoneyButton: {
        height: 50,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#1EAE98",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
})
export default AddMoney

