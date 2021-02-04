import React, {useState} from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import { Surface, Text, Avatar, TextInput  } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const  SelectDestination = props =>{
  const [text, setText] = useState('');

  return(
    <ScrollView style={{backgroundColor: '#fff'}}>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Manage Products')} style={{position: 'absolute', top: 0, marginLeft: 16, marginTop: 30}}>
        <Avatar.Icon size={30} style={{backgroundColor: '#fff', borderColor: '#000'}}  icon="arrow-left" color="#BCBCBC"/>
      </TouchableOpacity>
      <Image
        style={{width: '100%',}}
        source={require('../../../../../assets/images/Rectangle200.png')}
      />
      <MaterialCommunityIcons style={{alignSelf: 'center', top: 0, position: 'absolute', marginTop: 130}} color="#C92459" name='map-marker' size={25}/>
      <Surface style={styles.contentContainer}>
        <Text style={styles.title}>Select a destination</Text>
        <View style={{ borderBottomWidth: 3, borderBottomColor: '#C92459', width: 163, marginBottom: 10}}></View>
        <TextInput
          label="Where to?"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Text style={{fontWeight: 'bold', fontSize: 18, paddingTop: 20, paddingBottom: 20}}>Recent Places</Text>
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <MaterialCommunityIcons style={{alignSelf: 'center', marginRight: 5}} color="#C92459" name='map-marker' size={25}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Yotsuya (Suga Shrine)</Text>
            <Text style={{color: '#BCBCBC', fontSize: 15}}>5 Suga-cho, Shinjuku-ku Tokyo</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <MaterialCommunityIcons style={{alignSelf: 'center', marginRight: 5}} color="#C92459" name='map-marker' size={25}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Yotsuya (Suga Shrine)</Text>
            <Text style={{color: '#BCBCBC', fontSize: 15}}>5 Suga-cho, Shinjuku-ku Tokyo</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <MaterialCommunityIcons style={{alignSelf: 'center', marginRight: 5}} color="#C92459" name='map-marker' size={25}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Yotsuya (Suga Shrine)</Text>
            <Text style={{color: '#BCBCBC', fontSize: 15}}>5 Suga-cho, Shinjuku-ku Tokyo</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity delayPressIn={0} style={styles.btnPrimary} onPress={()=> props.navigation.navigate('Wine Summary')}>
            <Text style={styles.btnTxt}>PROCEED</Text>
          </TouchableOpacity> 
        </View>
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
  contentContainer:{ 
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25, 
    transform: [{translateY: -20}],
    padding: 20
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

export default SelectDestination