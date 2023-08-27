import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { pizza } from '../models'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import Typography from './Typography'
import Button from './Button'

const PizzaItem: FC<pizza> = ({ imageUrl, price, title, description, id }) => {
    const navigation = useNavigation() as any;

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Детали", { item: id })} style={styles.pizza}>
            <Image source={{ uri: imageUrl }} style={{ width: 130, height: 130 }} />

            <View style={styles.textblock}>
                <Typography align='auto' color='#000' text={title} size={17} weight='700' />
                <Typography align='auto' color='#000' text={description as string} size={13} weight="300" />

                <Button color_font='#fff' color_bg='#EA580C' margin={10} padding={10} size={100} title={`от ${price} ₽`} />
            </View>
        </TouchableOpacity>
    )
}

export default PizzaItem;

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