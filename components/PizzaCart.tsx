import { StyleSheet, Text, View, Image } from 'react-native'
import { FC } from 'react'
import { pizza } from '../models'
import Typography from './Typography'

const PizzaCart: FC<pizza> = ({ count, imageUrl, price, title, description, sizes, types }) => {
    return (
        <View style={styles.cart}>
            <View style={styles.pizzacart}>
                <Image source={{ uri: imageUrl }} style={{ width: 50, height: 50 }} />

                <View style={styles.textBlock}>
                    <Typography align='auto' color='#000' size={20} text={title} weight='600' />
                    <Typography align='auto' color='#000' size={12} weight='400' text='размер и тесто' />
                </View>
            </View>
            <View style={styles.line} />

            <View style={styles.total}>
                <Typography align='auto' color='#000' size={14} text={`${price} ₽`} weight='500' />

            </View>
        </View>
    )
}

export default PizzaCart

const styles = StyleSheet.create({
    cart: {},
    pizzacart: {},
    textBlock: {},
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    total: {}
})