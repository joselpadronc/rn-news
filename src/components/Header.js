import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

export function Header({ scene }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#fcfcfc'/>
      <Image
        style={{ width: 35, height: 35}}
        source={require('../assets/icons/newsIcon.png')}
      />
      <Text style={styles.title}>{ scene.descriptor.options.title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#04293A'
  }
});