import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, BackHandler } from 'react-native';
import { TextInput, Button, Text, Card, Title, Paragraph, Caption,  } from 'react-native-paper';
import HeaderContianer from '../../../../shared/components/Container/HeaderContainer/HeaderContainer';
import { ScrollView } from 'react-native-gesture-handler';

const EditProduct = (props) => {
  const [currentPassword, setCurrentPassowrd] = useState('')
  const [newPassword, setNewPassowrd] = useState('')
  const [confirmPassowrd, setConfirmPassword] = useState('')
  const [currentPassErr, setCurrentPassErr] = useState(false)
  const [newPassErr, setNewPassErr] = useState(false)
  const [confirmPassErr, setConfirmPassErr] = useState(false)
  
  const [item, setitem] = useState(props.route.params.item)
  const [goodsName, setgoodsName] = useState(props.route.params.item.goodsName)
  const [quantityType, setquantityType] = useState(props.route.params.item.quantityType)
  const [quantityValue, setquantityValue] = useState(props.route.params.item.quantityValue)
  const [amountPerUnit, setamountPerUnit] = useState(props.route.params.item.amountPerUnit)
  const [amount, setamount] = useState(props.route.params.item.amount)
  const [additionalDesc, setadditionalDesc] = useState(props.route.params.item.additionalDesc)
  const [plantationDate, setplantationDate] = useState(props.route.params.item.plantationDate)
  const [harvestDate, setharvestDate] = useState(props.route.params.item.harvestDate)
  const [product, setproduct] = useState('')

  let sdafdsfg = {
    goodsName: 'Cashews',
    quantityType : 'kg',
    quantityValue : '3000',
    amountPerUnit : '50',
    amount : '4000',
    additionalDesc :'Cashews unprocessed',
    plantationDate : '2008-01-01 00:00:01',
    harvestDate : '2008-01-01 00:00:01',
  }

  useEffect(() => {
    
    const backAction = () => {
      Alert.alert(
        'Edit Product',
        'Discard changes?',
        [
          {
              text: "Cancel",
              style: "cancel",
          },
          { text: "Discard", 
            onPress: () => {
              props.navigation.navigate('Manage Products')
            } 
          },
        ],
        { cancelable: true }
      )
        return true;
    };
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
        );
        return () => backHandler.remove();
    },[])

  const validateInputs = () => {
    if(
      goodsName == null || 
      quantityType == null || 
      quantityValue == null || 
      amountPerUnit == null || 
      amount == null || 
      plantationDate == null || 
      additionalDesc  == null || 
      harvestDate == null
    )
      alert('All fields must have details!')
    else{
      let body = {
        goodsName: goodsName,
        quantityType : quantityType,
        quantityValue : quantityValue,
        amountPerUnit : amountPerUnit,
        amount : amount,
        additionalDesc : additionalDesc,
        plantationDate : plantationDate,
        harvestDate : harvestDate,
      }
      props.route.params.editGoods(body, props.route.params.index)

      Alert.alert(
        'Edit Product',
        'Your product has been sucessfully updated!',
        [
          { text: "Go Back", 
            onPress: () => {
              
              props.navigation.navigate('Manage Products')
            } 
          },
        ],
        { cancelable: true }
      )
    }
  }
  return (
    <ScrollView>
      <HeaderContianer>
        <View style={{flex: 1, alignContent:'center', alignItems: 'center', marginTop: 40, marginBottom: 'auto'}}>
          <Text style={styles.incomeTitle}>Edit Products</Text>
          <Title style={styles.cardTitle}>Change details of your published product</Title>
        </View>
      </HeaderContianer>


      <TextInput
        label="Product Name"
        mode="flat"
        value={goodsName}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={currentPassErr}
        onChangeText={text => setgoodsName(text)}
      />      
      <View
        style={{flexDirection: 'row', display:'flex', justifyContent: 'center'}}
      >
        <TextInput
          label="Price Per Unit"
          mode="flat"
          value={amountPerUnit}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={currentPassErr}
          onChangeText={text => setamountPerUnit(text)}
        />      
        <TextInput
          label="Price"
          mode="flat"
          value={amount}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={currentPassErr}
          onChangeText={text => setamount(text)}
        />      
      </View>

      <View
        style={{flexDirection: 'row', display:'flex', justifyContent: 'center',}}
      >
        <TextInput
          label="Quantity Value"
          mode="flat"
          value={quantityValue}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={currentPassErr}
          onChangeText={text => setquantityValue(text)}
        />      
        <TextInput
          label="Quantity Unit"
          mode="flat"
          value={quantityType}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={currentPassErr}
          onChangeText={text => setquantityType(text)}
        />
      </View>

      <View
        style={{flexDirection: 'row', flexGrow: 1, justifyContent: 'center',}}
      >
        <TextInput
          label="Farming Start Date"
          mode="flat"
          value={plantationDate}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={newPassErr}
          placeholder={'YYYY-MM-DD'}
          onChangeText={text => setplantationDate(text)}
        />
        <TextInput
          label="Harvested Date"
          mode="flat"
          value={harvestDate}
          style={styles.textInput}
          theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
          error={confirmPassErr}
          placeholder={'YYYY-MM-DD'}
          onChangeText={text => setharvestDate(text)}
        />
      </View>
      <TextInput
        label="Description"
        mode="flat"
        value={additionalDesc}
        style={styles.textInput}
        theme={{ colors: { placeholder: '#6200ee'}, fonts: {fontFamily: 'Lato-Regular'}}}
        error={confirmPassErr}
        multiline={true}
        onChangeText={text => setadditionalDesc(text)}
      />
      <Button 
        mode="contained" 
        style={styles.btn}
        onPress={() => validateInputs()}
        uppercase
      >
        <Text style={styles.btnText}>Submit</Text>
      </Button>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    flex: 1,
    // width: '45%',
    // alignSelf: 'center',
    fontSize: 15, 
    fontFamily: 'Lato-Regular'
  },
  btn: {
    marginTop: 20,
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
    color: '#FFF',
  },
  incomeTitle:{
    fontSize: 30,
    color: '#fff', 
    fontFamily: 'Lato-Bold'
  },
  cardTitle:{
    color: '#999', 
    fontFamily: 'Lato-Bold'
  },
  cardCaption:{
    fontFamily: 'Lato-Regular'
  }
});

export default EditProduct