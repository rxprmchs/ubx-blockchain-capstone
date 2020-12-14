import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { TextInput, Button, Text, Card, Title, Caption  } from 'react-native-paper';
import HeaderContianer from '../../../../shared/components/Container/HeaderContainer/HeaderContainer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductInfo = (props) => {
  const [username, setUsername] = useState()

  const [goodsInfo, setgoodsInfo] = useState(props.route.params.item)
  const [usernameErr, setUsernameErr] = useState(false)

  const confirmDelete = () => {
    Alert.alert(
      'Delete Product',
      'Are you sure you want to delete the product?',
      [
        {
            text: "Cancel",
            style: "cancel",
        },
        { text: "Delete", 
          onPress: () => {
            props.route.params.deleteGoods()
            props.navigation.navigate('Manage Products')
          } 
        },
      ],
      { cancelable: true }
    )
    props.route.params
  }

  console.log(props.route.params)
  return (
    <ScrollView
      style={{...styles.container}}
    >
      <HeaderContianer>
      <View style={styles.headerContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.incomeTitle}>{goodsInfo.goodsName}</Text>
          </View>
          <View>
            <Text style={styles.incomeSubTitle}>Your Selected Product</Text>
          </View>
        </View>
      </HeaderContianer>

      <Card elevation={4} style={{margin: 10,}} onPress={()=>{}}>
        <Card.Content style={{flexDirection: 'column', justifyContent: 'space-between', borderLeftWidth: 2, borderLeftColor: '#6200EE',}}>
          <View>
            <Title style={styles.cardTitle}>Price: {goodsInfo.amount}</Title>
            <Title style={styles.cardTitle}>Price per unit: {goodsInfo.amountPerUnit}</Title>
            <Title style={styles.cardTitle}>Quantity: {goodsInfo.quantityValue} {goodsInfo.quantityType} </Title>
            <Title style={styles.cardTitle}>Harvested: {goodsInfo.harvestDate}</Title>
            <Title style={styles.cardTitle}>Farming Start date: {goodsInfo.plantationDate}</Title>
            <Title style={styles.cardTitle}>Farming Start date: {goodsInfo.plantationDate}</Title>
          </View>
          <View>
            <Title style={styles.cardTitle}>Product description: {goodsInfo.additionalDesc}</Title>
          </View>
          {/* <MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /> */}
        </Card.Content>
      </Card>
      <View
        style={{flexDirection: 'column', margin: 10}}
      >
        <Button 
          icon="plus" 
          mode="outlined" 
          style={{...styles.btn}}
          onPress={() => {confirmDelete()}}
        >
          DELETE PRODUCT
        </Button>
        <Button 
          icon="plus" 
          mode="contained" 
          style={{...styles.btn}}
          onPress={() => props.navigation.navigate('Edit Product', {item: props.route.params.item})}
        >
          EDIT PRODUCT
        </Button>
      </View>
      {/* <TextInput
        label="Change Username"
        mode="flat"
        value={username}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={usernameErr}
        // onChangeText={text => handleUsername(text)}
      />
      <Button 
        mode="contained" 
        style={styles.btn}
        onPress={() => console.log('Submit')}
        uppercase
      >
        <Text style={styles.btnText}>Submit</Text>
      </Button> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    fontSize: 15, 
    fontFamily: 'Lato-Regular'
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  btn: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    height: 50,
    justifyContent: 'center',
    fontSize: 50, 
  },
  btnText: {
    fontFamily: 'Lato-Bold', 
    fontSize: 18, 
    color: '#FFF'
  },
  headerContainer:{
    alignItems: 'center',
    height: '100%', 
    justifyContent: 'center'
  },
  incomeTitle:{
    fontSize: 30,
    color: '#fff', 
    fontFamily: 'Lato-Bold'
  },
  incomeSubTitle:{
    color: '#fff',
    fontFamily: 'Lato-Regular',
    letterSpacing: 3
  },
  cardTitle:{
    color: '#999', 
    fontFamily: 'Lato-Bold',
    fontSize: 16
  },
  cardCaption:{
    fontFamily: 'Lato-Regular'
  }
});

export default ProductInfo