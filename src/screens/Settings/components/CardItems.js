import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Title, Caption, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardItem = props => {
  return(
    <Card style={styles.container} onPress={props.onPress}>
      <Card.Content style={{ borderLeftWidth: 3, borderLeftColor: '#26B6BB',}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <Title style={styles.cardTitle}>{props.title}</Title>
          <Text style={styles.cardCaption}>{props.date}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <Text style={styles.cardSubTitle}>{props.changes}</Text>
          <Text style={styles.cardSubCaption}>{props.delivered}</Text>
        </View>
      </Card.Content>
    </Card>
)}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20, 
    marginTop: 10, 
    marginBottom: 10, 
    minWidth: '80%'
  },
  cardTitle:{
    fontFamily: 'Lato-Bold',
    width: 200,
    color: '#C92459'
  },
  cardCaption:{
    fontFamily: 'Lato-Regular',
    color: '#C92459', 
    fontSize: 18,
    paddingTop: 10
  },
  cardSubTitle:{
    paddingTop: 10, 
    paddingBottom: 10,
    color: '#DE933D',
    fontSize: 18
  },
  cardSubCaption:{
    color: '#BCBCBC',
    fontSize: 16,
    paddingTop: 10
  }
});


export default CardItem