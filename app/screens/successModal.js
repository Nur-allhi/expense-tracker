import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserContext } from './../Context/userContext';




export default function SuccessModal() {
    const { successModal, setSuccessModal } = useContext(UserContext);
    const [showModal, setShowModal] = useState(successModal)

    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        toggleModal();
    }, [successModal])

    const toggleModal = () => {
        if (successModal) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start()
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };



    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>

                <Animated.View style={[styles.modalContianer, { transform: [{ scale: scaleValue }]}]}>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.headerBtn}>
                            <TouchableOpacity onPress={() => setSuccessModal(false)}>
                                <Image
                                    source={require('../assets/modalItems/x.png')}
                                    style={{ height: 30, width: 30 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity onPress={() => setSuccessModal(false)}>
                            <Image
                                source={require('../assets/modalItems/success.png')}
                                style={{ height: 100, width: 100 }}
                            />
                        </TouchableOpacity>

                        <Text style={{ marginVertical: 10, fontSize: 15, textAlign: "center" }}>
                            Successully added your Transaction.
                        </Text>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContianer: {
        width: '60%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20,
    },
    headerBtn: {
        width: '100%',
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})
