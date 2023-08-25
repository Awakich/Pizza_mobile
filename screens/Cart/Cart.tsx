import { StyleSheet, Text, View } from 'react-native'
import { FC, useState } from 'react'
import Layout from '../../components/Layout'
import Typography from '../../components/Typography'

const Cart: FC = () => {

    const [cart, setCart] = useState([])

    return (
        <Layout>
            {cart.length ? "cart" :
                <View style={styles.empty}>
                    <Typography size={24} text='Корзина пуста' weight='600' />
                    <Typography size={16} text='Попробуйте добавить что-нибудь в неё' weight='300' />
                </View>
            }
        </Layout>
    )
}

export default Cart

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
})