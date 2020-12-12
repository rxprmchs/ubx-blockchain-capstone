import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import {  
  Card, 
  Title, 
  Paragraph, 
  Text, 
  Avatar, 
  Button ,
  Caption, 
  TextInput,
  Dialog, 
  Portal,
  DataTable 
  } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating, AirbnbRating } from 'react-native-ratings';

import HeaderContainer from '../../../../../shared/components/Container/HeaderContainer/HeaderContainer'
import { formatDate } from '../../../../../shared/utils'

const TransactionDetails = (props) => {
  const { transaction } = props.route.params;
  return(
    <ScrollView style={{backgroundColor: "#6200EE"}}>
        <View style={styles.incomeContainer}>
          <View>
            <Text style={styles.incomeSubTitle}>TRANSACTION DETAILS</Text>
          </View>
        </View>
        <View style={styles.userContainer}>
          <Card elevation={4} style={styles.userCardContainer}>
            <Card.Content>
              <Text>Transaction ID: {transaction.transactionId}</Text>
              <Text>Wholesaler ID: {transaction.wholesalerId}</Text>
              <Text>Status: {transaction.status}</Text>
              <Text>Delivery Send Date: {formatDate(transaction.deliverySendDate)}</Text>
              <Text>Delivery Receive Date:{formatDate(transaction.deliveryRecieveDate)} </Text>
              <Text>Delivery Description: {transaction.deliveryDesc}</Text>
            </Card.Content>
          </Card>
        </View>
      <View style={{flexDirection: 'row',}}>
        <Card onPress={()=>console.log('Pressed!')} style={{width: '100%'}}>
          <Card.Content style={styles.ratingCardContent}>
            <Text>Give Rating</Text>
            <AirbnbRating
              count={5}
              reviews={["Bad", "Okay", "Good", "Very good!", "Great!"]}
              defaultRating={3}
              reviewSize={15}
              size={25}
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              label="Description"
           />
            <Button mode="contained" onPress={() => console.log('Pressed')}>
              Submit
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
  incomeContainer: {
    alignItems: 'center',
    marginTop: 40
  },
  incomeTitle:{
    fontSize: 40,
    color: '#fff', 
    fontFamily: 'Lato-Bold'
  },
  incomeSubTitle:{
    color: '#fff',
    fontFamily: 'Lato-Regular',
    letterSpacing: 3
  },
  userIcon: {
  },
  userContainer: {
    justifyContent: 'center', 
    marginTop: 20
  },
  userCardContainer:{
    minWidth: '90%',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 250,
    justifyContent: 'center',
  },
  userCardContent:{
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  ratingContainer:{ 
    marginLeft: 10, 
    marginRight: 10, 
    marginBottom: 10,
    flexDirection: 'row',
    width: '49%',
    justifyContent: 'space-between'
  },
  ratingCardContent:{
    borderLeftWidth: 2, 
    borderLeftColor: '#6200EE',
    flexDirection: 'column',
    margin: 5
  },
  ratingTitle:{
    fontFamily: 'Lato-Bold'
  },
  ratingCaption:{
    fontFamily: 'Lato-Regular',
    letterSpacing: 1
  }
});

export default TransactionDetails;