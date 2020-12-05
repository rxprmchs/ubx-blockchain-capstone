import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import {  
  Card, 
  Title, 
  Paragraph, 
  Text, 
  Avatar, 
  Caption, 
  Dialog, 
  Portal,
  DataTable 
  } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HeaderContainer from '../../../../../shared/components/Container/HeaderContainer/HeaderContainer'

const TransactionDetails = () => {
  return(
    <View>
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
              <Text>Transaction Date: 12/07/2020</Text>
              <Text>Transactor: Plaridel Ralpi</Text>
              <Text>Description: </Text>
            </Card.Content>
          </Card>
        </View>
      </HeaderContainer>
      <View style={{flexDirection: 'row', marginTop: 200}}>
        <Card elevation={4} style={styles.ratingContainer}>
          <Card.Content style={styles.ratingCardContent}>
            <Text>Received Rating: 5.0</Text>
          </Card.Content>
        </Card>
      </View>
      <Card style={{margin: 10, width: '49%'}}>
        <Card.Content style={styles.ratingCardContent}>
          <Text>View Profile</Text>
        </Card.Content>
      </Card>
    </View>
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
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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