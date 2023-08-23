import { Text } from 'react-native'
import React, { FC } from 'react'

type Typography = {
    text: string,
    size: number,
    weight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
}

const Typography: FC<Typography> = ({ text, size, weight }) => {
    return (
        <Text style={[{ fontWeight: weight, fontSize: size }]}>{text}</Text>
    )
}

export default Typography;