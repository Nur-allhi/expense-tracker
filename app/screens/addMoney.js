import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';



const AddMoney = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
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
                            }} source={require('../assets/formIcon/money.png')} />
                            <TextInput style={styles.amountField}
                                placeholder="Amount"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="amount"
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
                            }} source={require('../assets/formIcon/money.png')} />
                            <TextInput style={styles.titleField}
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
                <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Add To Expense</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#FFE6E6",
    },
    screenTitle: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    addMoneyForm: {
        paddingHorizontal: 30,
        top: 30,
    },
    amountWrapper: {
        height: 100,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        // borderWidth: 2,
        backgroundColor: "#F1E9E5",
        borderRadius: 10,
    },
    amountField: {
        width: "80%",
        height: "90%",
        borderBottomWidth: 1,
        borderColor: "black",
        paddingLeft: 20,
        fontSize: 30,
    },
    titleWrapper: {
        height: 70,
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,

    },
    titleField: {
        width: "80%",
        height: "90%",
        borderBottomWidth: 1,
        borderColor: "black",
        paddingLeft: 20,
    },
    submitButton: {},
    buttonText: {},
})


export default AddMoney

