import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const AddEpenses = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <View style={styles.conatiner}>
            <Text style={styles.pageTitle}>
                New Expense
            </Text>
            <View style={styles.expenseForm}>
                {/* <ScrollView> */}
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
                                }} source={require('../assets/formIcon/money.png')} />
                                <TextInput style={styles.amountField}
                                    placeholder="Amount"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </View>
                        )}
                        name="Amount"
                        defaultValue=""
                    />
                    {errors.Amount && <Text>This is required.</Text>}
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
                        name="catagory"
                        defaultValue=""
                    />
                    {errors.catagory && <Text>choose catagory.</Text>}
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
                        name="note"
                        defaultValue=""
                    />
                    <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Add To Expense</Text>
                    </Pressable>
                {/* </ScrollView> */}
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        top: 20,
    },
    pageTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    expenseForm: {
        paddingHorizontal: 20,
        top: 50,
    },
    amountWrapper: {
        height: 70,
        flexDirection: "row",
        alignItems: "center",
    },
    amountField: {
        width: "80%",
        height: "90%",
        borderBottomWidth: 1,
        borderColor: "black",
        paddingLeft: 20,
    },
    catagoryWrapper: {
        height: 70,
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    catagoryField: {
        width: "80%",
        height: "90%",
        borderBottomWidth: 1,
        borderColor: "black",
        paddingLeft: 20,
    },
    noteWrapper: {
        height: 70,
        marginTop: 50,
        marginBottom: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    noteField: {
        width: "80%",
        height: "90%",
        borderBottomWidth: 1,
        borderColor: "black",
        paddingLeft: 20,
    },
    submitButton: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 100,
        borderRadius: 10,
        backgroundColor: "#035397",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
    },


})


export default AddEpenses
