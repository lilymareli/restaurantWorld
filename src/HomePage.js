import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SafeAreaView, View, FlatList, Alert, Text } from 'react-native'

//import { Item } from './components/Item'
import  SearchBar  from './components/SearchBar'
import styles from './styles'

const HomePage = () => {
    const [originalList, setOriginalList] = useState([])
    const [myList, setList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
      }, [])
 
    const fetchData = async () => {
        try {
            setLoading(true)

            let response = await axios.get("https://opentable.herokuapp.com/api/restaurants?city=Chicago")
            console.log(response.data.restaurants)
            setList(response.data.restaurants)
            setOriginalList(response.data.restaurants)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            Alert.alert("My App", "Bir hata oluştu!")
        }
    }


const renderCities = ({item}) => <Text>hey</Text>

    const searchCity = (text) => {
        console.log("hey")
        let filteredList = originalList.filter((data) => {

            const itemData = response.data.restaurants.toUpperCase()
            const textData = text.toUpperCase()

            return itemData.indexOf(textData) > -1
        })

        setList(filteredList)
    }

    return (
        <SafeAreaView style={styles.main.container}>
            <View style={{ flex: 1 }}>

                <SearchBar onSearch={searchCity} />

                <FlatList
                    refreshing={loading}
                    onRefresh={fetchData}
                    keyExtractor={(item, index) => index.toString()}
                    data={myList}
                    renderItem={renderCities}
                />

            </View>
        </SafeAreaView>
    )
}

export default HomePage;