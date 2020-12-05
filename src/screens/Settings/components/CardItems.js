import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Title, Caption } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardItem = props => {
  return(
    <Card style={{margin: 10,}}>
      <Card.Content style={{flexDirection: 'row', justifyContent: 'space-between',    borderLeftWidth: 2, 
    borderLeftColor: '#6200EE',}}>
        <View>
          <Title style={styles.cardTitle}>{props.title}</Title>
          <Caption style={styles.cardCaption}>{props.caption}</Caption>
        </View>
        <MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} />
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