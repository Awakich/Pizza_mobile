import { StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'
import Typography from './Typography'

const Loading: FC = () => {
    return (
        <View style={styles.loading}>
            <Typography align='center' color='#000' size={35} text='Загрузка...' weight='500' />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})