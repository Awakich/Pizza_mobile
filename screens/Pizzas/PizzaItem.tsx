import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { pizzas } from '../../models'
import { FC } from 'react'
import Typography from '../../components/Typography'

const PizzaItem: FC<pizzas> = ({ imageUrl, price, title, description }) => {

    return (
        <View style={styles.pizza}>
            <Image source={{ uri: imageUrl }} style={{ width: 130, height: 130 }} />

            <View style={styles.textblock}>
                <Typography text={title} size={17} weight='700' />
                <Typography text={description} size={13} weight="300" />

                <TouchableOpacity activeOpacity={0.6} style={styles.button}>
                    <Text style={styles.buttonText}>{`от ${price} ₽`}</Text>
                </TouchableOpacity>
            </View>
        </View>
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

    button: {
        backgroundColor: '#EA580C',
        borderRadius: 100,
        width: 100,
        paddingVertical: 10,
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }
})