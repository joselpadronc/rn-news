import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";

export function HorizontalCardArticle({ imgUrl, title, date }) {
  return (
    <View style={styles.horizontalCardArticle}>
      <Image
        style={styles.horizontalCardImgArticle}
        source={{uri: imgUrl}}
      />
      <View>
        <Text style={styles.horizontalCardTextDate}>{date}</Text>
        <Text style={styles.horizontalCardTextTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalCardArticle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 4,
    marginBottom: 10,
  },
  horizontalCardImgArticle: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 10
  },
  horizontalCardTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#04293A'
  },
  horizontalCardTextDate: {
    fontSize: 14,
    marginTop: 6,
    color: '#04293A'
  }
});