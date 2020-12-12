import * as React from 'react';
import { DataTable, Card, Title } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import dummyTransactions from './components/dummyTransaction'
import { formatDate } from './../../../../shared/utils'

const TransactionHistory = (props) => {
  const TransactionHistoryComponent = dummyTransactions.map(item => {
    return(
      <DataTable.Row  onPress={() => props.navigation.navigate('Transaction Details')}>
        <DataTable.Cell>{item.body.deliveryRecieveDate} </DataTable.Cell>
        <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
        <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
        <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
      </DataTable.Row>
    )
  })

  return(
    <Card style={{margin: 10 }}>
      <Card.Content>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Title style={{fontFamily: 'Lato-Bold', fontSize: 16}}>TRANSACTION HISTORY</Title>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Description</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
         
          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={page => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>
      </Card.Content>
    </Card>
)}

export default TransactionHistory