import { StyleSheet, View } from 'react-native'
import { FC } from 'react'
import Typography from './Typography'

const Navbar: FC = () => {
    return (
        <View>
            <Typography text='Лучшая пицца🍕' size={30} weight={"900"} />
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({})