import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
} from "react-native";

import { BottomNav } from '../components/BottomNav';
import { BigCardArticle } from '../components/BigCardArticle';
import { CardArticle } from '../components/CardArticle';
import { HorizontalCardArticle } from '../components/HorizontalCardArticle';

export function Home({ navigation }) {

  return (
    <SafeAreaView style={styles.bgView}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitleSection}>Top 1</Text>
        <BigCardArticle
          title='Big card article title'
          imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-9VLTBNKPO-WvcXJ5IKJUxnU8867o0LwQg&usqp=CAU'
        />
        <Text style={styles.textTitleSection}>For you</Text>
        <ScrollView horizontal style={{marginBottom: 20}} showsHorizontalScrollIndicator={false}>
          <CardArticle
            imgUrl='https://www.caracteristicas.co/wp-content/uploads/2017/07/texto-argumentativo-1-e1571586665510-300x149.jpg'
            title='Small card article title'
            date='12 Dec 2021'
          />
          <CardArticle
            imgUrl='https://prosycontras.de/wp-content/uploads/LEER-NOTICIAS-01-IMG.jpg'
            title='Small card article title'
            date='12 Dec 2021'
          />
          <CardArticle
            imgUrl='https://media.istockphoto.com/photos/cropped-image-of-journalist-holding-newspaper-wooden-cubes-with-word-picture-id1089289370?k=20&m=1089289370&s=170667a&w=0&h=a2RpjoYtHXwcb30iMUWd-I6yHzWKtlv2m7EMBIgzIIs='
            title='Small card article title'
            date='12 Dec 2021'
          />
        </ScrollView>
        <Text style={styles.textTitleSection}>Other</Text>
        <HorizontalCardArticle
          imgUrl='https://media.istockphoto.com/photos/cropped-image-of-journalist-holding-newspaper-wooden-cubes-with-word-picture-id1089289370?k=20&m=1089289370&s=170667a&w=0&h=a2RpjoYtHXwcb30iMUWd-I6yHzWKtlv2m7EMBIgzIIs='
          title='Small card article title'
          date='12 Dec 2021'
        />
        <HorizontalCardArticle
          imgUrl='https://www.caracteristicas.co/wp-content/uploads/2017/07/texto-argumentativo-1-e1571586665510-300x149.jpg'
          title='Small card article title'
          date='12 Dec 2021'
        />
        <HorizontalCardArticle
          imgUrl='https://media.istockphoto.com/photos/cropped-image-of-journalist-holding-newspaper-wooden-cubes-with-word-picture-id1089289370?k=20&m=1089289370&s=170667a&w=0&h=a2RpjoYtHXwcb30iMUWd-I6yHzWKtlv2m7EMBIgzIIs='
          title='Small card article title'
          date='12 Dec 2021'
        />
        <View style={{height: 15}}></View>
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
    padding: 20,
    paddingBottom: 0,
  },
  textTitleSection: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 22,
    marginBottom: 10,
    color: '#04293A'
  }
});