import React from 'react'
import { View  } from 'react-native'
import { 
  Surface, 
  Card, 
  Title, 
  Paragraph, 
  Text, 
  Avatar, 
  Caption  
  } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from '../../../../../assets/images/sampleProfile.jpg'

const Header = () => {
  return(
    <View>
      <Surface style={styles.surface}>
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
              <View>
                <Text style={{fontFamily: 'Lato-Bold', fontSize: 16,}}>James Andrew Cornes</Text>
                <Caption style={{fontFamily: 'Lato-Regular'}}>Livestock</Caption>
                <Caption style={{fontFamily: 'Lato-Regular'}}>Placeholder </Caption>
              </View>
            </Card.Content>
          </Card>
        </View>
      </Surface>
      <View style={styles.ratingContainer}>
        <Card style={styles.ratingCardContainer}>
          <Card.Content style={styles.ratingCardContent}>
            <View>
              <Title style={styles.ratingTitle}>9.2</Title>
              <Caption style={styles.ratingCaption}>Your Rating</Caption>
            </View>
            <MaterialCommunityIcons name="corn" color="#6200EE" size={30} />
          </Card.Content>
        </Card>
        <Card style={styles.ratingCardContainer}>
          <Card.Content style={styles.ratingCardContent}>
            <View>
              <Title style={styles.ratingTitle}>Feedback</Title>
              <Caption style={styles.ratingCaption}>Give Rating</Caption>
            </View>
            <MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} />
          </Card.Content>
        </Card>
      </View>
    </View>
)}

const styles = StyleSheet.create({
  surface: {
    display: 'flex',
    flexDirection: 'column',
    bottom: 0,
    backgroundColor: '#6200EE',
    height: 150,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
  },
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
    justifyContent: 'center'
  },
  userCardContainer:{
    width: 320, 
    justifyContent: 'center'
  },
  userCardContent:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  userAvatar:{
    backgroundColor: '#6200EE', 
    borderRadius: 100, 
    width: 110, 
    height: 110, 
    justifyContent: 'center', 
    alignItems: 'center'
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