import { StyleSheet } from 'react-native'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Typography from './Typography'

type button = {
    title: string,
    size: "100%" | 100 | number,
    onPress?: () => void,
    margin: number,
    padding: number,
    color_bg: string,
    color_font: string,
}

const Button: FC<button> = ({ title, size, onPress, margin, padding, color_bg, color_font }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[{ backgroundColor: color_bg, width: size, marginTop: margin, paddingVertical: padding }, styles.button]}>
            <Typography align='center' size={14} text={title} weight='600' color={color_font} />
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
    },
})