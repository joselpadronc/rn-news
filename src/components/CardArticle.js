import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";

export function CardArticle({ imgUrl, title, date }) {
  return (
    <View style={styles.cardArticle}>
      <Image
        style={styles.cardImgArticle}
        source={{uri: imgUrl}}
      />
      <View>
        <Text style={styles.cardTextDate}>{date}</Text>
        <Text style={styles.cardTextTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardArticle: {
    width: 180,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 15,
    marginRight: 15,
  },
  cardImgArticle: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  cardTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#04293A'
  },
  cardTextDate: {
    fontSize: 14,
    marginTop: 6,
    color: '#04293A'
  }
});