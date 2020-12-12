import React, {useState} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Title, Paragraph, Button, Text, Caption } from 'react-native-paper';

import HeaderContianer from '../../shared/components/Container/HeaderContainer/HeaderContainer';
import CardItem from './components/CardItems';

const ManageProducts = props => {
  let goodsss = [
    {
      goodsId: 0,
      farmerId: 0,
      goodsName: 'Native Chicken',
      quantityType : 'kg',
      quantityValue : '1000',
      amountPerUnit : '50',
      amount : '8000',
      additionalDesc :'Chicken alive',
      plantationDate : '2008-01-01 00:00:01',
      harvestDate : '2008-01-01 00:00:01',
      createdAt : '2007-01-01 00:00:01',
      updatedAt : '2008-01-01 00:00:01',
    },
    {
      goodsId: 1,
      farmerId: 1,
      goodsName: 'Native Potato',
      quantityType : 'kg',
      quantityValue : '500',
      amountPerUnit : '50',
      amount : '5000',
      additionalDesc :'Potato',
      plantationDate : '2008-01-01 00:00:01',
      harvestDate : '2008-01-01 00:00:01',
      createdAt : '2007-01-01 00:00:01',
      updatedAt : '2008-01-01 00:00:01',
    },
    {
      goodsId: 1,
      farmerId: 1,
      goodsName: 'Wheat',
      quantityType : 'kg',
      quantityValue : '2000',
      amountPerUnit : '50',
      amount : '9000',
      additionalDesc :'wheat dried',
      plantationDate : '2008-01-01 00:00:01',
      harvestDate : '2008-01-01 00:00:01',
      createdAt : '2007-01-01 00:00:01',
      updatedAt : '2008-01-01 00:00:01',
    },
    {
      goodsId: 1,
      farmerId: 1,
      goodsName: 'Cashews',
      quantityType : 'kg',
      quantityValue : '3000',
      amountPerUnit : '50',
      amount : '4000',
      additionalDesc :'Cashews unprocessed',
      plantationDate : '2008-01-01 00:00:01',
      harvestDate : '2008-01-01 00:00:01',
      createdAt : '2007-01-01 00:00:01',
      updatedAt : '2008-01-01 00:00:01',
    },
    {
      goodsId: 1,
      farmerId: 1,
      goodsName: 'Pecans',
      quantityType : 'kg',
      quantityValue : '4000',
      amountPerUnit : '50',
      amount : '7000',
      additionalDesc :'Pecans whole',
      plantationDate : '2008-01-01 00:00:01',
      harvestDate : '2008-01-01 00:00:01',
      createdAt : '2007-01-01 00:00:01',
      updatedAt : '2008-01-01 00:00:01',
    },
  ]
  // console.log(goodsss)
  const [goods, setGoods] = useState(goodsss)

  const deleteProduct = (index) =>{
    let temp = goods;
    // console.log('====before splice====')
    // console.log(temp)
    temp.splice(index,1)
    // console.log('====after splice====')
    // console.log(temp)
    setGoods([...temp])
  }

  const listGoods = () => {
    return goods.map((item, i) => {
      console.log(item)
      return(
        <CardItem
          key={i}
          item={item}
          title="Product A" 
          caption="Update your basic information that will be seen by merchants"
          onPress={() => props.navigation.navigate('Product Info', {item: item, deleteGoods: deleteProduct})}
        />
      )
    })
  }

  return(
    <View
      style={{...styles.container}}
    >
      <HeaderContianer>
        <View style={{flex: 1, alignContent:'center', alignItems: 'center', marginTop: 40, marginBottom: 'auto'}}>
          <Text style={styles.incomeTitle}>Your Products</Text>
          <Title style={styles.cardTitle}>List of all your published goods</Title>
        </View>
      </HeaderContianer>

      <ScrollView
        style={{borderBottomWidth: StyleSheet.hairlineWidth}}
      >
        {listGoods()}
      </ScrollView>

      <Button 
        icon="plus" 
        mode="contained" 
        style={{...styles.btn}}
        onPress={() => props.navigation.navigate('Add Product')}
      >
        ADD A PRODUCT
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  incomeTitle:{
    fontSize: 30,
    color: '#fff', 
    fontFamily: 'Lato-Bold'
  },
  btn: {
    marginVertical: 20,
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    fontSize: 50, 
  },
  cardTitle:{
    color: '#999', 
    fontFamily: 'Lato-Bold'
  },
  cardCaption:{
    fontFamily: 'Lato-Regular'
  }
});


export default ManageProducts