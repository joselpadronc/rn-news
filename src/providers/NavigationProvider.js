import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import { Header } from '../components/Header';
// Screens
import { Home } from "../screens/Home";
import { Favorites } from "../screens/Favorites";
import { Explore } from "../screens/Explore";
import { Account } from "../screens/Account";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Home",
          header: (props) => <Header {...props} />,
        }}
      />
      <Stack.Screen
        name='Explore'
        component={Explore}
        options={{
          title: "Explore",
          header: (props) => <Header {...props} />
        }}
      />
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{
          title: "Favorites",
          header: (props) => <Header {...props} />
        }}
      />
      <Stack.Screen
        name='Account'
        component={Account}
        options={{
          title: "Account",
          header: (props) => <Header {...props} />
        }}
      />
    </Stack.Navigator>
  );
}