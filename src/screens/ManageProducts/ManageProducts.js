import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Title, Paragraph, Button, Text, Caption, Appbar, FAB } from 'react-native-paper';

import HeaderContianer from '../../shared/components/Container/HeaderContainer/HeaderContainer';
import CardItem from '../Settings/components/CardItems';
import Fab from '../Settings/components/Fab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const goodsss = [
  {
    wine: 'Romanée-Conti Grand',
    currentTempCelcius : 12.2,
    origin : 'Netherlands',
    destination : 'Japan',
    etaDays : '2',
  },
  {
    wine: 'Romanée-Conti Grand Cru A',
    currentTempCelcius : 12.2,
    origin : 'Netherlands',
    destination : 'Japan',
    etaDays : '2',
  },
  {
    wine: 'Romanée-Conti Grand Cru B',
    origin : 'Netherlands',
    destination : 'Japan',
    etaDays : '2',
    currentTempCelcius : 12.2,
  },
  {
    wine: 'Romanée-Conti Grand Cru C',
    currentTempCelcius : 12.2,
    origin : 'Netherlands',
    destination : 'Japan',
    etaDays : '2',
  },
  {
    wine: 'Romanée-Conti Grand Cru D',
    currentTempCelcius : 12.2,
    origin : 'Netherlands',
    destination : 'Japan',
    etaDays : '2',
  },
  
  
]

const ManageProducts = props => {
  // console.log(goodsss)
  const [goods, setGoods] = useState(goodsss)

  useEffect (()=>{
    goodsss && setGoods(goodsss)
  },[])
    
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
    return goods && goods.map((item, i) => {
      console.log(item)

      let wineName = 
      <View style={{flexDirection: 'row', width: 220}}>
        {/* <MaterialCommunityIcons style={{alignSelf: 'center', marginRight: 5}} color="#C92459" name='thermometer' size={19}/> */}
        <Title style={{textAlignVertical: 'top', color:'#C92459', fontFamily: 'Lato-Bold', alignContent: 'flex-start'}}>{item.wine}</Title>
      </View>

      let temperature = 
      <View style={{flexDirection: 'row'}}>
        <MaterialCommunityIcons style={{marginRight: 5, marginTop: 5}} color="#C92459" name='thermometer' size={20}/>
        <Title style={{textAlignVertical: 'top', color:'#C92459', fontFamily: 'Lato-Regular',}}>
          {item.currentTempCelcius+ '°c'}
        </Title>
      </View>

      let route = 
      <View style={{flexDirection: 'row', }}>
        <MaterialCommunityIcons style={{alignSelf: 'center', }} color="#DE933D" name='map-marker' size={18}/>
        <Text style={{textAlignVertical: 'center', color:'#DE933D', fontFamily: 'Lato-Regular',}}>{item.origin +' - '}</Text>
        <MaterialCommunityIcons style={{alignSelf: 'center', }} color="#DE933D" name='airplane' size={18}/>
        <Text style={{textAlignVertical: 'center', color:'#DE933D', fontFamily: 'Lato-Regular',}}>{item.destination}</Text>
      </View>

      let eta = 
      <View style={{flexDirection: 'row', }}>
        {/* <MaterialCommunityIcons style={{alignSelf: 'center', }} color="#DE933D" name='map-marker' size={18}/> */}
        <Text style={{textAlignVertical: 'center', color:'#BCBCBC', fontFamily: 'Lato-Regular',}}>{item.etaDays + ' day(s) until arrival'}</Text>
        {/* <MaterialCommunityIcons style={{alignSelf: 'center', }} color="#DE933D" name='airplane' size={18}/> */}
        {/* <Text style={{textAlignVertical: 'center', color:'#DE933D', fontFamily: 'Lato-Regular',}}>{item.destination}</Text> */}
      </View>

      return(
        <CardItem
          style={styles.wineCard}
          key={i}
          item={item}
          wineName={wineName}
          temperature={temperature}
          route={route}
          eta={eta}
          onPress={() => console.log('Pressed: '+ i)}
          // onPress={() => props.navigation.navigate('Product Info', {item: item, deleteGoods: deleteProduct})}
        />
      )
    })
  }

  return(
    <View
      style={{...styles.container}}
    >
      <Appbar.Header backgroundColor="white">
        <Appbar.Action icon="menu" size={20} onPress={() => {}} />
       <Appbar.Content color="#fff" title="Wine List" />
        <Appbar.Action icon="magnify" size={20} onPress={() => {}} />
        <Appbar.Action icon='bell-outline' size={20} onPress={() => {}} />
      </Appbar.Header>

      <ScrollView
        style={{borderBottomWidth: StyleSheet.hairlineWidth}}
      >
        {listGoods()}
      </ScrollView>

      <Fab/>


      {/* <Button 
        icon="plus" 
        mode="contained" 
        style={{...styles.btn}}
        onPress={() => props.navigation.navigate('Add Product')}
      >
        ADD A PRODUCT
      </Button> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FBFBFB',
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
  },
  wineCard: {
    // borderTopRightRadius: 15,
    // borderBottomRightRadius: 15,
    marginTop: 15,
    marginBottom: 10 ,
    // borderWidth: 0.5,
    // borderTopColor: '#00000033',
    // borderBottomColor: '#00000033',
    // borderRightColor: '#00000033',
    // borderLeftWidth: 0,
  },
  cardCaption:{
    fontFamily: 'Lato-Regular',
    color: '#C92459', 
    // fontSize: 18,
    paddingTop: 5,
    textAlignVertical: 'top'
  },
  cardSubTitle:{
    paddingTop: 10, 
    paddingBottom: 10,
    color: '#DE933D',
    fontSize: 16,
    textAlignVertical: 'top'
  },
});


export default ManageProducts