import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

import HeaderContianer from '../../shared/components/Container/HeaderContainer/HeaderContainer';
import CardItem from './components/CardItems';

const Settings = props => {
  return(
    <View>
      <HeaderContianer>

      </HeaderContianer>
      <View>
        <CardItem 
          title="Update your information" 
          caption="Update your basic information that will be seen by merchants"
          onPress={() => props.navigation.navigate('Home')}
        />
        <CardItem 
          title="Change Username" 
          caption="Chane your username"
          onPress={() => props.navigation.navigate('Home')}
        />
        <CardItem 
          title="Change Password" 
          caption="Change your password frequently for safety purposes"
          onPress={() => props.navigation.navigate('Change Password')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Settings