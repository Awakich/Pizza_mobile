import { StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Categories: FC = () => {

    const categories = ["Все", "Мясные", "Вегентарианская", "Гриль", "Острые", "Закрытые"]

    return (
        <ScrollView horizontal={true} style={{ marginTop: 10 }} showsHorizontalScrollIndicator={false}>
            <View style={styles.categories}>
                {categories.map((categorie, index) => (
                    <Text style={styles.categorie} key={index} onPress={() => { }}>{categorie}</Text>
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

    categorie: {
        backgroundColor: "#eee",
        color: "#000",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 100,
        fontSize: 14
    }
})