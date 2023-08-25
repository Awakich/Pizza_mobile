import { StyleSheet, Text } from 'react-native'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

type button = {
    title: string
}

const Button: FC<button> = ({ title }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#EA580C',
        borderRadius: 100,
        width: 100,
        paddingVertical: 10,
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }
})