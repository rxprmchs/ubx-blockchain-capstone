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

const TransactionDetails = () => {
  return(
    <ScrollView>
      <HeaderContainer>
        <View style={styles.incomeContainer}>
          <View>
            <Text style={styles.incomeSubTitle}>TRANSACTION DETAILS</Text>
          </View>
        </View>
        <View style={styles.userContainer}>
          <Card elevation={4} style={styles.userCardContainer}>
            <Card.Content>
              <Text>Transaction ID: 032123123</Text>
              <Text>Wholesaler ID: 12/07/2020</Text>
              <Text>Status: Plaridel Ralpi</Text>
              <Text>Delivery Send Date: </Text>
              <Text>Delivery Received Date: </Text>
              <Text>Delivery Description: </Text>
            </Card.Content>
          </Card>
        </View>
      </HeaderContainer>
      <View style={{flexDirection: 'row', marginTop: 200}}>
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
    transform: [{translateY: 40}]
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
    transform: [{ translateY: -100 }]
  },
  userContainer: {
    transform: [{translateY: 90}],
    justifyContent: 'center', 
  },
  userCardContainer:{
    minWidth: '90%',
    marginBottom: 5,
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