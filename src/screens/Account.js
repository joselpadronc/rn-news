import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
} from "react-native";

import { BottomNav } from '../components/BottomNav';

export function Account({ navigation }) {

  return (
    <SafeAreaView style={styles.bgView}>
      <ScrollView style={styles.container}>
        <View>
          <Text>Holaa Account</Text>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgView: {
    backgroundColor: '#fcfcfc',
    height: '100%',
  },
  container: {
    padding: 15
  }
});