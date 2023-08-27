import { StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../entities/hooks'
import { cartSelector, resetCart } from '../../entities/slices/cartSlice'
import { FlatList } from 'react-native-gesture-handler'
import Layout from '../../components/Layout'
import Empty from '../../components/Empty'
import PizzaCart from '../../components/PizzaCart'
import Typography from '../../components/Typography'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const Cart: FC = () => {

    const navigation = useNavigation() as any;

    const { pizzas, totalPrice } = useAppSelector(cartSelector);
    const dispatch = useAppDispatch();
    const totalCount = pizzas.reduce((sum, pizza) => pizza.count + sum, 0);

    if (!pizzas.length || !totalPrice) return <Empty />

    const payHandlder = () => {
        dispatch(resetCart());
        navigation.push("Home");
    }

    return (
        <Layout padding={20}>
            <Typography color='#000' weight='500' align='auto' size={20} text={`${totalCount} товаров на ${totalPrice} ₽`} />
            {pizzas && <FlatList style={styles.cart} keyExtractor={(item) => item?.id as string} data={pizzas} renderItem={({ item }) =>
                <PizzaCart
                    id={item.id}
                    types={`${item.types}`}
                    sizes={`${item.sizes}`}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    count={item.count}
                />
            }
            />}

            <Button color_font='#fff' color_bg='#EA580C' margin={10} padding={15} onPress={payHandlder} title={`ОФОРМИТЬ ЗА ${totalPrice} ₽`} size={"100%"} />
        </Layout>
    )
}

export default Cart;

const styles = StyleSheet.create({
    cart: {
        marginTop: 20,
    }
})