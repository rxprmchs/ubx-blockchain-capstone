import React from 'react'
import { StyleSheet, View, Text, ScrollView} from 'react-native'

import Header from './components/Header/Header'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

const Home = props => {
  return(
    <ScrollView>
      <Header navigation={props.navigation}/>
      <TransactionHistory navigation={props.navigation}/>
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

export default Home