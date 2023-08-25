import { FlatList, StyleSheet } from 'react-native'
import { FC, useEffect, useState } from 'react'
import { pizzas } from '../../models'
import axios from 'axios'
import PizzaItem from './PizzaItem'

const Pizza: FC = () => {
    const [pizzas, setPizzas] = useState<pizzas[]>([])

    const fetchData = async () => { await axios.get('https://6468f6b203bb12ac208307ac.mockapi.io/pizzas').then(res => setPizzas(res.data)) }

    useEffect(() => { fetchData() }, [])

    return (
        <FlatList style={styles.pizzas} showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id?.toString() as string} data={pizzas} renderItem={(item) => (
            <PizzaItem
                description={item.item.description}
                category={item.item.category}
                imageUrl={item.item.imageUrl}
                price={item.item.price}
                title={item.item.title}
                sizes={item.item.sizes}
                types={item.item.types}
                id={item.item.id}
                key={item.item.id} />
        )} />
    )
}

export default Pizza;

const styles = StyleSheet.create({
    pizzas: {
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    }
})