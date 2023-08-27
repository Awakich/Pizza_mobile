import { StyleSheet, View } from 'react-native'
import { FC } from 'react'
import Typography from './Typography'

const Empty: FC = () => {
    return (
        <View style={styles.empty}>
            <Typography align='center' color='#000' size={24} text='Корзина пуста' weight='600' />
            <Typography align='center' color='#000' size={16} text='Попробуйте добавить что-нибудь в неё' weight='300' />
        </View>
    )
}

export default Empty

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
})