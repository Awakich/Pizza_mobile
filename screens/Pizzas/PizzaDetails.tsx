import { StyleSheet, Text, View, Image } from 'react-native'
import { FC, useState, useEffect } from 'react'
import { pizzas } from '../../models';
import Layout from '../../components/Layout'
import axios from 'axios';
import Button from '../../components/Button';

const PizzaDetails: FC<any> = ({ route }) => {
    const { item } = route.params;
    const [pizza, setPizza] = useState<pizzas>()

    const getPizza = async () => { await axios.get(`https://6468f6b203bb12ac208307ac.mockapi.io/pizzas/${item}`).then(res => setPizza(res.data)) }
    useEffect(() => { getPizza() }, [])

    const type: string[] = ["тонкое", "традиционное"]

    return (
        <Layout>
            <Image source={{ uri: pizza?.imageUrl }} style={{ width: 345, height: 345 }} />
            <Text>{pizza?.title}</Text>
            <Text>{pizza?.description}</Text>
            <View>
                {pizza?.sizes?.map((size, index) => (
                    <Text key={index}>{size} см</Text>
                ))}
            </View>
            <View>
                {pizza?.types?.map((num, index) => (
                    <Text key={index}>{type[num]}</Text>
                ))}
            </View>
            <Button title={`${pizza?.price} ₽`} />
        </Layout>
    )
}

export default PizzaDetails

const styles = StyleSheet.create({})