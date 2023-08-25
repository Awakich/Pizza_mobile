import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { pizzas } from '../models'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import Typography from './Typography'
import Button from './Button'

const PizzaItem: FC<pizzas> = ({ imageUrl, price, title, description, id }) => {
    const navigation = useNavigation() as any

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Детали", { item: id })} style={styles.pizza}>
            <Image source={{ uri: imageUrl }} style={{ width: 130, height: 130 }} />

            <View style={styles.textblock}>
                <Typography text={title} size={17} weight='700' />
                <Typography text={description} size={13} weight="300" />

                <Button title={`от ${price} ₽`} />
            </View>
        </TouchableOpacity>
    )
}

export default PizzaItem

const styles = StyleSheet.create({
    pizza: {
        display: 'flex',
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        marginVertical: 20,
    },

    textblock: {
        width: 190,
        gap: 5
    },
})