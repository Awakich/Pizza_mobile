import { FlatList, StyleSheet, View, Text, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import { FC, useEffect, useState } from 'react'
import axios from 'axios'

type Pizzas = {
    id?: number,
    imageUrl: string,
    title: string,
    types?: [number],
    sizes?: [number],
    price: number,
    category: number,
}

const Pizza: FC = ({ }) => {
    const [pizzas, setPizzas] = useState<Pizzas[]>([])

    const fetchData = async () => {
        const res = await axios.get('https://6468f6b203bb12ac208307ac.mockapi.io/pizzas').then(res => setPizzas(res.data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id?.toString() as string} data={pizzas} renderItem={(item) => (
            <View style={styles.pizza}>
                <Image source={{ uri: item.item.imageUrl }} style={{ width: 130, height: 130 }} />

                <View>
                    <Text>{item.item.title}</Text>
                    <Text>{item.item.category}</Text>
                    <View>
                        {item.item.types?.map((num, index) => (
                            <Text key={index}>{num}</Text>
                        ))}
                    </View>

                    <TouchableOpacity activeOpacity={0.6} style={styles.button}>
                        <Text style={styles.buttonText}>{`от ${item.item.price} ₽`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )} />
    )
}

export default Pizza;

const styles = StyleSheet.create({
    pizza: {
        display: 'flex',
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        marginVertical: 15
    },

    button: {
        backgroundColor: '#EA580C',
        borderRadius: 100,
        width: 100,
        paddingVertical: 10,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }
})