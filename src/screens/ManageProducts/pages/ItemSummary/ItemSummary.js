import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import QorkPatternContainer from '../../../../shared/Container/QorkPattern/QorkPattern'
import Wine from '../../../../../assets/images/Wine.svg'
import SmallWine  from '../../../../../assets/images/SmallWine.svg'
import RegisterModal from './components/RegisterModal';

const ItemSummary = props => {
  const [modalVisible, setModalVisible] = useState(false)

  const openModalHandler = () => {
    setModalVisible(true)
  }
  
  const closeModalHandler = () => {
    setModalVisible(false)
  }

  return(
    <ScrollView>
      <QorkPatternContainer>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Select Destination')} style={{position: 'absolute', top: 0, marginLeft: 16, marginTop: 30}}>
        <Avatar.Icon size={30} style={{backgroundColor: '#fff', borderColor: '#000'}}  icon="arrow-left" color="#BCBCBC"/>
      </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: 20}}>
          <View>
            <Wine/>
          </View>
          <View style={{width: 200, paddingLeft: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: "#FFF"}}>Romanée-Conti Grand Cru</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: "#FFF", paddingTop: 10}}>76 Years</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: "#FFF"}}>Red wine</Text>
          </View>
        </View>
     </QorkPatternContainer>
      <View style={styles.cardContainer}>
        <View style={{ alignItems: 'center'}}>
          <SmallWine/>
          <Text style={{color: '#DE933D', fontSize: 18, width: 150, paddingLeft: 25}}>Maintaining Temperature</Text>
          <Text style={{color: '#DE933D', fontSize: 18}}>11 - 14 c</Text>
        </View>
        <View style={{width: 120, alignItems: 'center', justifyContent: 'space-between', height: 100}}>
          <Text style={{color: '#DE933D', fontSize: 35, fontWeight: 'bold'}}>12.2°c</Text>
          <View>
          </View>
        </View>
      </View>
      <View style={{transform: [{translateY: -60}], }}>
        <View style={{ paddingLeft: 40, paddingRight: 40,  justifyContent: 'flex-end', paddingBottom: 20}}>
          <Text style={styles.title}>About the Wine</Text>
          <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 125, marginBottom: 10}}></View>
          <Text style={{fontSize: 15}}>The Burgundy producer Domaine Romanée-Conti, known as "DRC" to collectors, consistently commands the highest prices in the world of wine. Its top vineyard, Romanée-Conti, encompasses just 4.5 acres.</Text>
        </View>
        <View style={{ paddingLeft: 40, paddingRight: 40,  justifyContent: 'flex-end', paddingBottom: 20}}>
          <Text style={styles.title}>Destination</Text>
          <View style={{flexDirection: 'row', paddingTop: 5}}>
            <MaterialCommunityIcons style={{alignSelf: 'center', marginRight: 5}} color="#C92459" name='map-marker' size={25}/>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>Yotsuya (Suga Shrine)</Text>
              <Text style={{color: '#BCBCBC', fontSize: 15}}>5 Suga-cho, Shinjuku-ku Tokyo</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingLeft: 40, paddingRight: 40,  justifyContent: 'flex-end', paddingBottom: 20}}>
          <Text style={styles.title}>Qork serial number</Text>
          <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 155, marginBottom: 10}}></View>
          <Text style={{fontSize: 15}}>#00001564893</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', transform: [{translateY: -60}], }}>
        <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={openModalHandler}>
          <Text style={styles.btnTxt}>REGISTER WINE</Text>
        </TouchableOpacity> 
      </View>
      {/* <View style={{flexDirection: 'column'}}>
        <View style={{height: 400, position: 'relative'}}>
          <Group/>
        </View>
      </View> */}
      <RegisterModal
       onPress={()=>props.navigation.navigate('Manage Products')}
       modalVisible={modalVisible} 
       cancel={closeModalHandler} 
      />  
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
  cardContainer:{ 
    flex: 1,
    transform: [{translateY: -60}], 
    height: 180, 
    marginLeft: 50, 
    marginRight: 50,  
    borderRadius: 25,
    justifyContent: 'space-around', 
    alignItems: 'center', 
    flexDirection: 'row',
    backgroundColor: '#434343',
  },
  title:{
    fontSize : 18,
    fontWeight : 'bold',
    color: '#C92459',
    paddingTop: 10,
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

export default ItemSummary