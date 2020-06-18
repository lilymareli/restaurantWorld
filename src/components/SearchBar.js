import React from 'react'
import { SafeAreaView, Text, View, TextInput } from 'react-native'

import styles from '../styles'

const SearchBar = (props) => {
    return (
        <View style={styles.searchBar.container}>
            <TextInput
                onChangeText={props.onSearch}
                placeholder="Şehir arayın.."
            />
        </View>
    )
}

export default SearchBar;