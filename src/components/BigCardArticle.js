import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";

export function BigCardArticle({ imgUrl, title }) {
  return (
    <View style={styles.bigCardArticle}>
      <Image
        style={styles.bigCardImgArticle}
        source={{uri: imgUrl}}
      />
      <View style={styles.bigCardTitleContainer}>
        <Text style={styles.bigCardTextTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigCardArticle: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigCardImgArticle: {
    width: '100%',
    height: 170,
    borderRadius: 8,
  },
  bigCardTitleContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    top: -35,
    width: '90%',
    elevation: 1,
  },
  bigCardTextTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#04293A'
  },
});