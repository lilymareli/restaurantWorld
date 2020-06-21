import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, Text } from 'react-native'
import { SearchBar, Item } from '../components/'
import styles from '../styles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const CityList = (props) => {
  const [originalList, setOriginalList] = useState([])
  const [myList, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    axios.get("https://opentable.herokuapp.com/api/cities")
      .then(response => {
          
        setList(response.data.cities)
        setOriginalList(response.data.cities)
        setLoading(false)
        
      })
      .catch(error => {
        setLoading(false)
        Alert.alert("My App", "Bir hata oluştu!")
      })

  }

  const renderCities = ({ item }) => <Item data={item} onCityPress={() => 
    {
      props.navigation.navigate("Restaurants", { cityName: item })}} />


  const searchCities = (text) => {
    let filteredList = originalList.filter((item) => {
      const itemData = item.toUpperCase()
      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1
    })

    setList(filteredList)
  }

  return (
    <SafeAreaView style={styles.main.container}>
      <View style={{ flex: 1 }}>

        <SearchBar onSearch={searchCities} />

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

export { CityList };