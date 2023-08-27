import { StyleSheet, View, Image } from 'react-native'
import { FC } from 'react'
import { pizzaInfo } from '../models'
import Typography from './Typography'
import Button from './Button'
import { useAppDispatch } from '../entities/hooks'
import { addCart, minusPizza } from '../entities/slices/cartSlice'

const PizzaCart: FC<pizzaInfo> = ({ count, imageUrl, price, title, id, sizes, types }) => {

    const dispatch = useAppDispatch();

    if (!count) return;

    console.log(sizes, types)

    return (
        <View style={styles.cart}>
            <View style={styles.pizzacart}>
                <Image source={{ uri: imageUrl }} style={{ width: 70, height: 70 }} />

                <View style={styles.textBlock}>
                    <Typography align='auto' color='#000' size={18} text={title} weight='600' />
                    <Typography align='auto' color='#000' size={12} weight='400' text={`${sizes} см, ${types}`} />
                </View>
            </View>

            <View style={styles.line} />

            <View style={styles.total}>
                <Typography align='auto' color='#000' size={18} text={`${price * count} ₽`} weight='500' />

                <View style={styles.counter}>
                    <Button size={30} title='-' margin={0} padding={5} color_bg='' color_font='#000' onPress={() => dispatch(minusPizza({ id }))} />
                    <Typography align='auto' color='#000' size={14} text={`${count}`} weight='800' />
                    <Button size={30} title='+' margin={0} padding={5} color_bg='' color_font='#000' onPress={() => dispatch(addCart({ id, price }))} />
                </View>
            </View>
        </View>
    )
}

export default PizzaCart

const styles = StyleSheet.create({
    cart: {},

    pizzacart: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingVertical: 10,
    },

    textBlock: {},

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd'
    },

    total: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },

    counter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#eee",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 100,
        color: "#000"
    }
})