import { StyleSheet } from 'react-native'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Typography from './Typography'

type button = {
    title: string,
    size: "100%" | 100,
    onPress?: () => void,
}

const Button: FC<button> = ({ title, size, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[{ width: size }, styles.button]}>
            <Typography align='center' size={14} text={title} weight='600' color='#fff' />
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: "#EA580C",
        borderRadius: 100,
    },
})