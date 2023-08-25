import { StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'

const Cart: FC<any> = ({ navigation }) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('Cart')}>Cart</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})