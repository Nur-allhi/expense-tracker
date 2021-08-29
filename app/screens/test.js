import React from 'react'

const test = () => {
    return (

        <ModalPoup visible={visible}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Image
                            source={require('./assets/x.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('./assets/success.png')}
                    style={{ height: 150, width: 150, marginVertical: 10 }}
                />
            </View>

            <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                Congratulations registration was successful
            </Text>
        </ModalPoup>

    )
}

export default test
