import { StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'
import Typography from './Typography'

const Loading: FC = () => {
    return (
        <View style={styles.loading}>
            <Typography size={40} text='Загрузка' weight='500' />
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