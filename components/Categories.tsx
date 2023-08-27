import { StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useAppDispatch, useAppSelector } from '../entities/hooks'
import { categorySelector, changeCategory } from '../entities/slices/categorySlice'

const Categories: FC = () => {

    const categories = ["Все", "Мясные", "Вегентарианская", "Гриль", "Острые", "Закрытые"]

    const categoryItem = useAppSelector(categorySelector);
    const dispatch = useAppDispatch();

    return (
        <ScrollView horizontal={true} style={{ marginTop: 10 }} showsHorizontalScrollIndicator={false}>
            <View style={styles.categories}>
                {categories.map((categorie, index) => (
                    <Text style={categoryItem === index ? styles.categorieActive : styles.categorieInActive} key={index} onPress={() => dispatch(changeCategory(index))}>{categorie}</Text>
                ))}
            </View>
        </ScrollView>

    )
}

export default Categories;

const styles = StyleSheet.create({
    categories: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        height: 50,
    },

    categorieActive: {
        backgroundColor: "#ccc",
        color: "#000",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 100,
        fontSize: 14
    },

    categorieInActive: {
        backgroundColor: "#eee",
        color: "#000",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 100,
        fontSize: 14
    }
})