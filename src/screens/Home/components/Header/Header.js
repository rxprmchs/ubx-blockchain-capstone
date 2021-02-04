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
import { AirbnbRating } from 'react-native-ratings';

import Profile from '../../../../../assets/images/sampleProfile.jpg'
import HeaderContainer from '../../../../shared/components/Container/HeaderContainer/HeaderContainer'

const Header = props => {
  const [ratingModal, setRatingModal] = useState(false)
  const [myRatingModal, setMyRatingModal] = useState(false)

  const openRatingHandler = () => setRatingModal(true)
  const closeRatingHandler = () => setRatingModal(false)

  const openMyRatingHandler = () => setMyRatingModal(true)
  const closeMyRatingHandler = () => setMyRatingModal(false)

  return(
    <View>
      <HeaderContainer>
        <View style={styles.incomeContainer}>
          <View style={{flexDirection: 'row'}}>
            <Paragraph style={{color: '#fff'}}>₱</Paragraph>
            <Text style={styles.incomeTitle}>42,900.00</Text>
          </View>
          <View>
            <Text style={styles.incomeSubTitle}>Total Income</Text>
          </View>
        </View>
        <View style={styles.userContainer}>
          <Card elevation={4} style={styles.userCardContainer}>
            <Card.Content style={styles.userCardContent}>
              <View style={styles.userAvatar}>
                {/* <Avatar.Image  size={100} style={{backgroundColor: '#6200EE'}} source={Profile}/> */}
              </View>
              <View style={styles.userInfo}>
                <Text style={{fontFamily: 'Lato-Bold', fontSize: 16,}}>James Andrew Cornes</Text>
                <Caption style={{fontFamily: 'Lato-Regular'}}>Type: Livestock</Caption>
                <Caption style={{fontFamily: 'Lato-Regular'}}>Account No.: 123321 </Caption>
              </View>
            </Card.Content>
          </Card>
        </View>
      </HeaderContainer>
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
    transform: [{translateY: 50}],
    justifyContent: 'center', 
  },
  userCardContainer:{
    minWidth: '90%',
    marginBottom: 5,
    justifyContent: 'center',
  },
  userCardContent:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  userAvatar:{
    backgroundColor: '#6200EE', 
    borderRadius: 100, 
    width: 110, 
    height: 110, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  userInfo:{
    marginLeft: 20,
  },
  ratingContainer:{
    marginTop: 120,  
    marginLeft: 10, 
    marginRight: 10, 
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ratingCardContainer:{
    width: '49%',
    elevation: 3
  },
  ratingCardContent:{
    borderLeftWidth: 2, 
    borderLeftColor: '#6200EE',
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

export default Header;