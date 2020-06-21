import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ItemRest = props => {
    return (
        <TouchableOpacity onPress={props.onCityPress}>
        <View style={styles.item.container}>
            <Text style={styles.item.songName}>{props.name}</Text>
        </View>
        </TouchableOpacity>
    )
}

export { ItemRest }