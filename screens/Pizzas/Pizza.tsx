import { FlatList, StyleSheet } from 'react-native'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../entities/hooks'
import { categorySelector } from '../../entities/slices/categorySlice'
import PizzaItem from '../../components/PizzaItem'
import Layout from '../../components/Layout'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'
import Categories from '../../components/Categories'
import { getPizzas, pizzaSelector } from '../../entities/slices/pizzaSlice'

const Pizza: FC = () => {
    const categoryItem = useAppSelector(categorySelector)
    const pizzas = useAppSelector(pizzaSelector)

    const dispatch = useAppDispatch()

    const fetchData = async () => {
        const category = categoryItem > 0 ? `category=${categoryItem}` : ""
        dispatch(getPizzas({ category }))
    }

    useEffect(() => { fetchData() }, [categoryItem])

    if (!pizzas) return <Loading />

    return (
        <Layout padding={45}>
            <Navbar />
            <Categories />
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
                    key={item.item.id}
                    count={item.item.count}
                />
            )} />
        </Layout>
    )
}

export default Pizza;

const styles = StyleSheet.create({})