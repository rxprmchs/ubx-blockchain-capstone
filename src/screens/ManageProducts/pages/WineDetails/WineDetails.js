import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAB, Avatar } from 'react-native-paper';

import QorkPatternContainer from '../../../../shared/components/Container/QorkPattern/QorkPattern'
import Wine from '../../../../../assets/images/MaskGroup2.svg'
import SmallWine  from '../../../../../assets/images/Group9.svg'
import Group  from '../../../../../assets/images/Group1833.svg'
import MoreInfoModal from './components/MoreInfoModal'
import Map from '../../../../../assets/images/Rectangle200.png'

const WineDetails = props => {
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
      <TouchableOpacity onPress={()=> props.navigation.navigate('Manage Products')} style={{position: 'absolute', top: 0, marginLeft: 16, marginTop: 30}}>
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
            <TouchableOpacity onPress={openModalHandler}>
              <Text style={{color: '#DE933D', fontSize: 18,}}>more info</Text>
              <View style={{ borderBottomWidth: 2, borderBottomColor: '#DE933D', width: 78}}></View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        {/* <View style={{height: 100, transform: [{translateY: -100}], position: 'relative'}}>
          <Group/>
        </View> */}
        <View style={{backgroundColor: 'blue'}}>
          <Image
            style={{width: '100%', height: 330}}
            source={require('../../../../../assets/images/Rectangle200.png')}
          />
        </View>
      </View>
      <MaterialCommunityIcons style={{alignSelf: 'center', position: 'absolute', bottom: 0, marginBottom: 220}} color="#DE933D" name='map-marker' size={50}/>
      <FAB
        style={styles.fab}
        small
        icon="settings"
        onPress={()=> props.navigation.navigate('Adjust Temp')}
      />
      <MoreInfoModal
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#C92459'
  },
});

export default WineDetails