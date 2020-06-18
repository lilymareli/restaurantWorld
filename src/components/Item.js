import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'

// city
// restaurant
/* "name": "Las Tablas Colombian Steak House",
  "address": "2942 N Lincoln Ave",
  "city": "Chicago",
  "state": "IL",
  "area": "Chicago / Illinois",
  "postal_code": "60657",
  "country": "US",
  "phone": "7738712414",
  "lat": 41.935137,
  "lng": -87.662815,
  "price": 2,
  "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
  "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
  "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
  */

const Item = props => {
    return (
        <View style={styles.item.container}>
            <Image
                style={styles.item.image}
                source={{ uri: props.data.image_url }}
            />
            <Text style={styles.item.artistName}>{props.data.name}</Text>
            <Text style={styles.item.songName}>{props.data.address}</Text>
        </View>
    )
}

export default Item;