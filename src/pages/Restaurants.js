import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, Text, Alert } from 'react-native'
import { SearchBar, Item, ItemRest } from '../components/'
import styles from '../styles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Restaurants = (props) => {
  const [myList, setMyList] = useState([])
  const [originalRest, setOriginalRest] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
        let response = await axios.get("https://opentable.herokuapp.com/api/restaurants?city=" + props.route.params.cityName)
        .then(response => {
          setMyList(response.data.restaurants)
          setOriginalRest(response.data.restaurants)
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
          Alert.alert("My App", "Bir hata oluştu!")
        })
    }

    const renderRests = ({ item }) => <ItemRest name={item.name} onCityPress={() => 
      { console.log(item.id)
        props.navigation.navigate("Detail", { resId: item.id })}} />
  

    const searchRest = (text) => {
      let filteredList = originalRest.filter((item) => {
        console.warn(item)
        const itemData = item.name.toUpperCase()
        const textData = text.toUpperCase()
  
        return itemData.indexOf(textData) > -1
      })
  
      setMyList(filteredList)
    }
  
    return (
      <SafeAreaView style={styles.main.container}>
        <View style={{ flex: 1 }}>
  
          <SearchBar onSearch={searchRest}/>
  
          <FlatList
            refreshing={loading}
            onRefresh={fetchData}
            keyExtractor={(item, index) => index.toString()}
            data={myList}
            renderItem={renderRests}
          
          />
  
        </View>
      </SafeAreaView>
    )
  }
  
  

export { Restaurants };