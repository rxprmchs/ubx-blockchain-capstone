import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Platform, TouchableOpacity } from 'react-native'
import { Appbar, Surface, Text } from 'react-native-paper';

import CardItem from './components/CardItems';

const Settings = props => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const logoutHandler = () => {
    setVisible(false)
    props.navigation.navigate('Authentication')
  }
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return(
    <ScrollView>
      <Appbar.Header backgroundColor="red">
       <Appbar.Content color="#fff" title="Adjust Temperature" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <View style={{height: 300, width: '100%', backgroundColor: '#FBFBFB', flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{color: '#C92459', fontSize: 18, paddingTop: 20, fontWeight: 'bold',}}>Current Temperature</Text>
        <Text style={{color: '#DE933D', fontSize: 100, fontWeight: 'bold',  padding: 10}}>12°c</Text>
        <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={()=>props.onPress()}>
          <Text style={styles.btnTxt}>CHANGE TEMPERATURE</Text>
        </TouchableOpacity> 
      </View>
      <Surface style={{height: '100%', flex: 1}}>
        <Text style={{color: '#C92459', fontWeight: 'bold', fontSize: 18, paddingLeft: 20, paddingTop: 10}}>Logs</Text>
        <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 40,  marginLeft: 20, marginBottom: 10}}></View>
        <CardItem 
          title="Temperature was changed" 
          date="3 day(s) ago"
          changes="From: 16c - To: 11c"
          onPress={() => console.log('Clicked!')}
        />
       <CardItem 
          title="Temperature was changed" 
          date="3 day(s) ago"
          changes="From: 16c - To: 11c"
          onPress={() => console.log('Clicked!')}
        />
        <CardItem 
          title="Temperature was changed" 
          date="3 day(s) ago"
          changes="From: 16c - To: 11c"
          onPress={() => console.log('Clicked!')}
        />
      </Surface>
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
  btnPrimary: {
    flexDirection: 'row',
    backgroundColor: "#C92459",
    justifyContent: "center",
    alignItems: 'center',
    width: 295,
    height: 48,
    borderRadius: 25,
    marginTop: 20,
    elevation: 2,
  },
  btnTxt : {
    color: '#FFF',
    letterSpacing: 3.15,
    textAlign: 'center',
    fontWeight : "bold",
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});


export default Settings