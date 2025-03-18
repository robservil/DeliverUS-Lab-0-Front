import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import ControlPanelScreen from './src/screens/controlPanel/ControlPanelScreen'
import ProfileScreen from './src/screens/profile/ProfileScreen'
import RestaurantsScreen from './src/screens/restaurants/RestaurantsScreen'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsScreen} />
        <Tab.Screen
          name="Control Panel"
          component={ControlPanelScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
