import { StyleSheet, View } from 'react-native'
import { FC, ReactNode } from 'react'

type Children = {
    children: ReactNode
}

const Layout: FC<Children> = ({ children }) => {
    return (
        <View style={styles.layout}>
            {children}
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#fff',
        color: "#000",
        paddingVertical: 50,
        paddingHorizontal: 20,
    }
})