import { Text } from 'react-native'
import React, { FC } from 'react'

type typography = {
    text: string,
    size: number,
    color: string,
    align: "center" | "auto"
    weight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
}

const Typography: FC<typography> = ({ text, size, weight, color, align }) => {
    return (
        <Text style={[{ fontWeight: weight, fontSize: size, color: color, textAlign: align }]}> {text}</Text >
    )
}

export default Typography;