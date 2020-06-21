import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { CityList, Restaurants, Detail } from './pages';

const Stack = createStackNavigator()

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="CityList"
      >

        <Stack.Screen
          name="CityList"
          component={CityList}
          options={{
            title: "Şehir Listesi"
          }}
        />

        <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{
            title: "Restoranlar"
          }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Restoran detay"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;