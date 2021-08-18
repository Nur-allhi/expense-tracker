import React, { useState } from 'react';
import { Image, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



const AddMoney = () => {
    const [formInput, setFormInput] = useState({})
    const [newBalance, setNewbalance] = useState([])

    const addBalance = () => {
        const formData = {
            title: formInput.title,
            balance: parseFloat(formInput.balanceInput),
        }
        Keyboard.dismiss()
        setNewbalance([...newBalance, formData])
        setFormInput('')
        
    }
    console.log(newBalance)
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

                <View style={styles.amountWrapper}>
                    <Image style={{
                        width: 40,
                        height: 40,
                    }} source={require('../assets/formIcon/salary.png')} />
                    <TextInput
                        style={styles.amountField}
                        keyboardType={'phone-pad'}
                        placeholder="Balance"
                        value={formInput.balanceInput}
                        onChangeText={(number) => setFormInput({ ...formInput, balanceInput: number })}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Image style={{
                        width: 40,
                        height: 40,
                    }} source={require('../assets/formIcon/tag.png')} />
                    <TextInput
                        style={styles.titleField}
                        placeholder="Where you get those?"
                        value={formInput.title}
                        onChangeText={(text) => setFormInput({ ...formInput, title: text })}
                    />
                </View>
                <TouchableOpacity style={styles.addMoneyButton} onPress={addBalance}>
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

