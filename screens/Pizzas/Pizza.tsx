import { FlatList, StyleSheet } from 'react-native'
import { FC, useEffect, useState } from 'react'
import { pizzas } from '../../models'
import axios from 'axios'
import PizzaItem from '../../components/PizzaItem'
import Typography from '../../components/Typography'
import Layout from '../../components/Layout'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'

const Pizza: FC = () => {
    const [pizzas, setPizzas] = useState<pizzas[]>([])

    const fetchData = async () => { await axios.get('https://6468f6b203bb12ac208307ac.mockapi.io/pizzas').then(res => setPizzas(res.data)) }

    useEffect(() => { fetchData() }, [])

    if (!pizzas) return <Loading />

    return (
        <Layout>
            <Navbar />
            <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id?.toString() as string} data={pizzas} renderItem={(item) => (
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
        </Layout>
    )
}

export default Pizza;

const styles = StyleSheet.create({})