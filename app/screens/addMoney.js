import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';





const AddMoney = () => {
    const { control, handleSubmit, reset } = useForm();
    
   

    const [inputedBalance, setInputedbalance] = useState([])




    // process the form data to setThe value:
    const onSubmit = (data) => {
        const { inputBalance, title } = data

        const newEntry = {
            formBalance: parseFloat(inputBalance),
            title: title
        }
        setInputedbalance([...inputedBalance, newEntry])
        reset("")
    };



    useEffect(() => {
        // // Total of the balance:
        const arraybalanceTotal = inputedBalance.reduce((acc, formEntry) => {
            return acc + formEntry.formBalance;
        }, 0)
        // setBalance(arraybalanceTotal)
        console.log("Total=", arraybalanceTotal)
    }, [onSubmit])



    
    // const updateTheBalance = () => {
    //     const arraybalanceTotal = inputedBalance.reduce((acc, formEntry) => {
    //         return acc + formEntry.formBalance;
    //     }, 0)
    //     console.log("Total=", arraybalanceTotal)
    // }

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
                    name="inputBalance"
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

