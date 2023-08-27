import { StyleSheet, View } from 'react-native'
import { FC, ReactNode } from 'react'

type children = {
    children: ReactNode,
    padding: number;
}

const Layout: FC<children> = ({ children, padding }) => {
    return (
        <View style={[{ paddingTop: padding }, styles.layout]}>
            {children}
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    layout: {
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    }
})