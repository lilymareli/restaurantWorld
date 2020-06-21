import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'

const Detail = (props) => {
    const [list, setList] = useState([])

    useEffect(() => {
        setList(JSON.parse(props.route.params.charList))
    }, [])

    return (
        <View>
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={list}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
}

export { Detail };