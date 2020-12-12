import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Text } from 'react-native-paper';

import HeaderContianer from '../../shared/components/Container/HeaderContainer/HeaderContainer';
import CardItem from './components/CardItems';

const Settings = props => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const logoutHandler = () => {
    setVisible(false)
    props.navigation.navigate('Authentication')
  }

  return(
    <ScrollView>
      <HeaderContianer>
        <Text style={{marginTop: 40, fontFamily: 'Lato-Bold', color: '#fff', fontSize: 30}}>Account Settings</Text>
        <View style={{transform: [{translateY: 80}], position: 'absolute'}}>
          <CardItem 
            title="Update your information" 
            caption="Update your basic information that will be seen by merchants"
            onPress={() => props.navigation.navigate('Change Information')}
          />
        </View>
      </HeaderContianer>
      <View style={{marginTop: 60}}>
      <CardItem 
        title="Change Username" 
        caption="Change your username"
        onPress={() => props.navigation.navigate('Change Username')}
      />
      <CardItem 
        title="Change Password" 
        caption="Change your password frequently for safety purposes"
        onPress={() => props.navigation.navigate('Change Password')}
      />
      <CardItem 
        title="Logout" 
        caption="Logout to your account"
        onPress={() => showDialog()}
      />
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title style={{fontFamily: 'Lato-Bold', color: '#6200EE'}}>Logout</Dialog.Title>
          <Dialog.Content>
            <Paragraph style={{fontFamily: 'Lato-Regular'}}>Are you sure you want to logout?</Paragraph>
          </Dialog.Content>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Dialog.Actions>
            <Button style={{fontFamily: 'Lato-Bold'}} onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
          <Dialog.Actions>
            <Button style={{fontFamily: 'Lato-Bold'}} onPress={() => logoutHandler()}>Yes</Button>
          </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>
    </ScrollView>
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