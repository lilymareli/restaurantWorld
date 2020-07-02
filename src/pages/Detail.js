import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, Alert } from 'react-native'

const Detail = (props) => {
    const [address, setAddress] = useState([])

    useEffect(() => {
        fetchData()
      }, [])
    
      const fetchData = async () => {
            let response = await axios.get("https://opentable.herokuapp.com/api/restaurants/" + props.route.params.resId)
            .then(response => {
                console.log(response.data.address)
             setAddress(response.data.address)
            })
            .catch(error => {
              Alert.alert("My App", "Bir hata oluştu!")
            })
        }
    
      

    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={address}
    renderItem={({ item }) => <Detailed add={item} /> }
            />
        </View>
    );
}

export { Detail };