import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Title, Caption } from 'react-native-paper';

const CardItem = (props) => {
  return(
    <Card style={{margin: 10,}} onPress={props.onPress}>
      <Card.Content style={{flexDirection: 'row', justifyContent: 'space-between', borderLeftWidth: 2, borderLeftColor: '#6200EE',}}>
        <View>
          <Title style={styles.cardTitle}>{props.item? props.item.goodsName :  props.title}</Title>
          <Caption style={styles.cardCaption}>{props.item? props.item.additionalDesc : props.caption}</Caption>
        </View>
      </Card.Content>
    </Card>
)}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle:{
    fontFamily: 'Lato-Bold'
  },
  cardCaption:{
    fontFamily: 'Lato-Regular'
  }
});


export default CardItem