import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import {  
  Card, 
  Title, 
  Paragraph, 
  Text,  
  Button ,
  Caption, 
  TextInput,
  Dialog, 
  Portal, 
  Headline
  } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { formatDate } from '../../../../../shared/utils'

const TransactionDetails = (props) => {
  const { transaction } = props.route.params;
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return(
    <ScrollView style={{backgroundColor: "#6200EE"}}>
        <View style={styles.incomeContainer}>
          <View>
            <Text style={styles.incomeSubTitle}>TRANSACTION DETAILS</Text>
          </View>
        </View>
        <View>
        <Card elevation={4} style={{margin: 10,}}>
          <Card.Content style={{justifyContent: 'space-between', borderLeftWidth: 2, borderLeftColor: '#6200EE',}}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
              <View>
                <Caption style={styles.fontBold}>Send Date: {formatDate(transaction.deliverySendDate)}</Caption>
              </View>
              <View>
                <Caption style={styles.fontBold}>Receive Date: {formatDate(transaction.deliveryRecieveDate)} </Caption>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
              <View>
                <Title style={styles.fontBold}>Juan Cruz</Title>
                <Caption style={styles.fontBold}>JC Store</Caption>
              </View>
              <View>
                <Text style={{...styles.fontBold, color: 'green'}}>GOODS RECEIVED</Text>
              </View>
            </View>
            <View style={styles.divider}/>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
              <View>
                <Title style={styles.fontBold}>Celery</Title>
                <Caption style={styles.fontBold}>5 Kilos</Caption>
              </View>
              <View>
                <Title style={styles.fontBold}>Php 500.00</Title>
              </View>
            </View>
            <View style={styles.divider}/>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
              <View>
                <Caption style={styles.fontBold}>Delivery Description</Caption>
                  <TextInput
                    style={{minWidth: '100%', borderBottomColor: '#6200EE', borderBottomWidth: 2, backgroundColor: '#EFF7FF'}}
                    multiline={true}
                    numberOfLines={5}
                    editable={false}
                  >
                  <Text style={{fontFamily: 'Lato-Regular', fontSize: 14}}>Item well packaged with breathable plastic. Fresh and clean! Really good, will buy again! :D</Text>
                </TextInput>
              </View>
            </View>
          </Card.Content>
        </Card>
        </View>
        <View>
          <Card onPress={showDialog} elevation={4} style={{ margin: 10}}>
            <Card.Content>
              <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                <View>
                  <Title style={styles.fontBold}>Feedback</Title>
                  <Caption style={styles.fontBold}>Leave a review!</Caption>
                </View>
                <View>
                  <MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} />
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title style={{fontFamily: 'Lato-Bold', color: '#6200EE'}}>Give a Rating</Dialog.Title>
          <Dialog.Content>
            <TextInput
              style={{minWidth: '100%', marginTop: 10, borderBottomColor: '#6200EE', borderBottomWidth: 2, backgroundColor: '#EFF7FF', fontSize: 14, fontFamily: 'Lato-Regularasdasd'}}
              multiline={true}
              numberOfLines={5}
              label="Comment(Optional)"
            />
            <AirbnbRating
                count={5}
                reviews={["Bad", "Okay", "Good", "Very good!", "Great!"]}
                defaultRating={1}
                reviewSize={20}
                size={25}
              />
          </Dialog.Content>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Dialog.Actions>
            <Button  onPress={hideDialog} style={{fontFamily: 'Lato-Bold'}} onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
          <Dialog.Actions>
            <Button onPress={hideDialog} style={{fontFamily: 'Lato-Bold'}}>Submit</Button>
          </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>
    </ScrollView>
)}

const styles = StyleSheet.create({
  incomeContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  incomeTitle:{
    fontSize: 40,
    color: '#fff', 
    fontFamily: 'Lato-Bold'
  },
  incomeSubTitle:{
    color: '#fff',
    fontFamily: 'Lato-Regular',
    letterSpacing: 3
  },

  ratingContainer:{ 
    marginLeft: 10, 
    marginRight: 10, 
    marginBottom: 10,
    flexDirection: 'row',
    width: '49%',
    justifyContent: 'space-between'
  },
  ratingCardContent:{
    borderLeftWidth: 2, 
    borderLeftColor: '#6200EE',
    flexDirection: 'column',
    margin: 5
  },
  ratingTitle:{
    fontFamily: 'Lato-Bold'
  },
  ratingCaption:{
    fontFamily: 'Lato-Regular',
    letterSpacing: 1
  },
  fontRegular: {
    fontFamily: 'Lato-Regular'
  },
  fontBold:{
    fontFamily: 'Lato-Bold'
  },
  divider: {
    borderBottomColor: '#6200ee', 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    width: '100%', 
    marginTop: 10,
    marginBottom:10,
    justifyContent: 'center'
  }
});

export default TransactionDetails;