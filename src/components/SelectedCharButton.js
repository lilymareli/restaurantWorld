import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import styles from '../styles';

const SelectedCharButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'black',
                padding: 10,
                borderRadius: 20,
                position: 'absolute',
                bottom: 10,
                right: 10
            }}
            onPress={props.onSelect}
        >
            <Text style={{ color: 'white' }}>{props.selectedCharLength} karakter seçili</Text>
        </TouchableOpacity>
    );
}

export { SelectedCharButton };