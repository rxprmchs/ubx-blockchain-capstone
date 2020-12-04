import React from 'react'
import { StyleSheet, View, Text, ScrollView} from 'react-native'

import Header from './components/Header/Header'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

const Home = () => {
  return(
    <ScrollView>
      <Header/>
      <TransactionHistory/>
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