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

import Profile from '../../../../../assets/images/sampleProfile.jpg'
import HeaderContainer from '../../../../shared/components/Container/HeaderContainer/HeaderContainer'

const Header = () => {
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
                <Avatar.Image  size={100} style={{backgroundColor: '#6200EE'}} source={Profile}/>
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
      <View style={styles.ratingContainer}>
        <Card style={styles.ratingCardContainer} onPress={openMyRatingHandler}>
          <Card.Content style={styles.ratingCardContent} >
            <View>
              <Title style={styles.ratingTitle}>9.2</Title>
              <Caption style={styles.ratingCaption}>Your Rating</Caption>
            </View>
            <MaterialCommunityIcons name="corn" color="#6200EE" size={30} />
          </Card.Content>
        </Card>
        <Card style={styles.ratingCardContainer} onPress={openRatingHandler}>
          <Card.Content style={styles.ratingCardContent}>
            <View>
              <Title style={styles.ratingTitle}>Feedback</Title>
              <Caption style={styles.ratingCaption}>Give Rating</Caption>
            </View>
            <MaterialCommunityIcons name="star-circle" color="#6200EE" size={30} />
          </Card.Content>
        </Card>
      </View>
      <Portal>
        <Dialog visible={ratingModal} onDismiss={closeRatingHandler}>
          <Dialog.Title>Give Rating</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Rate the merchant</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={myRatingModal} onDismiss={closeMyRatingHandler}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
            <DataTable>
            <DataTable.Header>
              <DataTable.Title>Buyer</DataTable.Title>
              <DataTable.Title numeric>Comment</DataTable.Title>
              <DataTable.Title numeric>Rating</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Agapito Bagumbayan</DataTable.Cell>
              <DataTable.Cell numeric>Ayos!</DataTable.Cell>
              <DataTable.Cell numeric>9.5</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Jose  Rizal</DataTable.Cell>
              <DataTable.Cell numeric>Nice!</DataTable.Cell>
              <DataTable.Cell numeric>9.0</DataTable.Cell>
            </DataTable.Row>
            </DataTable>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
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