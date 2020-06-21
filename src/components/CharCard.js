import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import styles from '../styles';

const CharCard = (props) => {
    return (
        <TouchableOpacity
            style={[styles.charCard.container, { backgroundColor: props.charData.isSelected ? "gray" : "#b0bec5" }]}
            onPress={props.onCharSelect}
        >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style={styles.charCard.charName}>{props.charData.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export { CharCard };