import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Title, Caption, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardItem = props => {
  return(
    <Card style={{...styles.container, ...props.style,}} onPress={props.onPress}>
      <Card.Content style={{ borderLeftWidth: 3, borderLeftColor: '#26B6BB',}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <Title style={styles.cardTitle}>{props.title}</Title>
          <Title style={styles.cardCaption}>{props.date}</Title>
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
    minWidth: '80%',
    overflow: "hidden",

    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 0.5,
    borderTopColor: '#00000033',
    borderBottomColor: '#00000033',
    borderRightColor: '#00000033',
    borderLeftWidth: 0,
  },
  cardTitle:{
    fontFamily: 'Lato-Bold',
    width: 200,
    paddingTop: 5,
    
    color: '#C92459',
    textAlignVertical: 'top'

  },
  cardCaption:{
    fontFamily: 'Lato-Regular',
    color: '#C92459', 
    // fontSize: 18,
    paddingTop: 5,
    textAlignVertical: 'top'
  },
  cardSubTitle:{
    paddingTop: 10, 
    paddingBottom: 10,
    color: '#DE933D',
    fontSize: 16,
    textAlignVertical: 'top'
  },
  cardSubCaption:{
    color: '#BCBCBC',
    fontSize: 16,
    paddingTop: 10,
    textAlignVertical: 'top'

  }
});


export default CardItem