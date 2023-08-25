import { StyleSheet, View } from 'react-native'
import { FC, ReactNode } from 'react'

type children = {
    children: ReactNode
}

const Layout: FC<children> = ({ children }) => {
    return (
        <View style={styles.layout}>
            {children}
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    layout: {
        paddingTop: 45,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        height: "100%"
    }
})