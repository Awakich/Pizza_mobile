import { StyleSheet, Text, View, Image } from 'react-native'
import { FC, useState, useEffect } from 'react'
import { pizza, pizzaInfo } from '../../models';
import Layout from '../../components/Layout'
import axios from 'axios';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Typography from '../../components/Typography';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppDispatch } from '../../entities/hooks';
import { addCart } from '../../entities/slices/cartSlice';

const PizzaDetails: FC<any> = ({ route }) => {
    const navigation = useNavigation() as any;
    const { item } = route.params;

    const [pizza, setPizza] = useState<pizza>()
    const [activeIndexSize, setActiveIndexSize] = useState<number>(0)
    const [activeIndexTypes, setActiveIndexTypes] = useState<number>(0)
    const dispatch = useAppDispatch();

    const getPizza = async () => { await axios.get(`https://6468f6b203bb12ac208307ac.mockapi.io/pizzas/${item}`).then(res => setPizza(res.data)) }
    useEffect(() => { try { getPizza() } catch (error) { <Loading /> } }, [])

    const types_dough: string[] = ["тонкое", "традиционное"]

    if (!pizza) return <Loading />

    const addPizzaHandler = () => {
        const pizzaInfo: pizzaInfo = {
            id: pizza.id,
            price: pizza.price,
            title: pizza.title,
            imageUrl: pizza.imageUrl,
            types: types_dough[activeIndexTypes],
            sizes: pizza.sizes[activeIndexSize],
            count: 0
        }

        dispatch(addCart(pizzaInfo))
        navigation.navigate("Home")
    }

    return (
        <Layout padding={45}>
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} style={styles.icon}>
                    <Text style={styles.iconText}>{"<--"}</Text>
                </TouchableOpacity>

                <Image source={{ uri: pizza?.imageUrl }} style={{ width: 345, height: 345, marginBottom: 10 }} />

                <View style={styles.textBlock}>
                    <Typography text={pizza?.title} weight='500' align='auto' color='#000' size={24} />
                    <Typography align='auto' color='#888' size={13} text={pizza?.description as string} weight='400' />
                </View>


                <View style={styles.groups}>
                    {pizza?.sizes?.map((size, index) => (
                        <Text onPress={() => setActiveIndexSize(index)} style={activeIndexSize === index ? styles.indexActive : styles.indexInActive} key={index}>{`${size} см`}</Text>
                    ))}
                </View>

                <View style={styles.groups}>
                    {pizza?.types?.map((num, index) => (
                        <Text onPress={() => setActiveIndexTypes(index)} style={activeIndexTypes === index ? styles.indexActive : styles.indexInActive} key={index}>{types_dough[num]}</Text>
                    ))}
                </View>
            </View>

            <Button color_font='#fff' color_bg='#EA580C' margin={10} padding={15} onPress={addPizzaHandler} size={"100%"} title={`В КОРЗИНУ ЗА ${pizza?.price} ₽`} />
        </Layout>
    )
}

export default PizzaDetails

const styles = StyleSheet.create({
    icon: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderRadius: 100,
        boxShadow: 4,
        borderColor: "#999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    iconText: {
        fontSize: 26,
    },

    groups: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#dedede",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 3,
    },

    indexActive: {
        backgroundColor: "#fff",
        color: "#000",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },

    indexInActive: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },

    textBlock: {
        gap: 10,
        marginBottom: 10,
    }
})