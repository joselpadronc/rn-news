import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import {useRoute} from '@react-navigation/native';

export function BottomNav({ navigation }) {
  const route = useRoute();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={route.name === 'Home' ? styles.itemTouchActive :styles.itemTouch}
        onPress={() => navigation.push('Home')}
      >
        <Image
          source={require('../assets/icons/homeIcon.png')}
          style={{ width: 18, height: 18}}
        />
        <Text style={styles.itemTouchText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={route.name === 'Explore' ? styles.itemTouchActive :styles.itemTouch}
        onPress={() => navigation.push('Explore')}
      >
        <Image
          source={require('../assets/icons/exploreIcon.png')}
          style={{ width: 18, height: 18}}
        />
        <Text style={styles.itemTouchText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={route.name === 'Favorites' ? styles.itemTouchActive :styles.itemTouch}
        onPress={() => navigation.push('Favorites')}
      >
        <Image
          source={require('../assets/icons/favoritesIcon.png')}
          style={{ width: 18, height: 18}}
        />
        <Text style={styles.itemTouchText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={route.name === 'Account' ? styles.itemTouchActive :styles.itemTouch}
        onPress={() => navigation.push('Account')}
      >
        <Image
          source={require('../assets/icons/accountIcon.png')}
          style={{ width: 18, height: 18}}
        />
        <Text style={styles.itemTouchText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 4,
    marginHorizontal: 6,
    borderRadius: 10,
    bottom: 0,
    elevation: 2,
  },
  itemTouch: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  itemTouchText: {
    fontSize: 10,
    color: '#04293A'
  },
  itemTouchActive: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#C2FFF9',
    padding: 5,
    width: 60,
    borderRadius: 8,
  }
});