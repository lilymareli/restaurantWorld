import { StyleSheet, Dimensions, Appearance } from 'react-native'

const userColor = Appearance.getColorScheme()
 
const styles = {
    main: StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: userColor === "light" ? "white" : "#37474f"
        }
    }),
    item: StyleSheet.create({
        container: {
            borderRadius: 10,
            margin: 5,
            padding: 10,
            backgroundColor: userColor === "light" ? "#eceff1" : "#78909c",

        },
        songName: {
            fontSize: 20,
            fontWeight: 'bold',
            color: userColor === "light" ? "black" : "white"
        },
        artistName: {
            color: 'gray',
            color: userColor === "light" ? "black" : "white"
        },
        image: {
            height: Dimensions.get("window").height / 2,
            resizeMode: "contain"
        }
    }),
    searchBar: StyleSheet.create({
        container: {
            backgroundColor: '#fff3e0',
            margin: 10,
            padding: 10,
            borderRadius: 10,
            shadowOpacity: 0.2,
            shadowRadius: 5
        }
    })
}

export default styles;