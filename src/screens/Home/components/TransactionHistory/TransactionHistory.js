import * as React from 'react';
import { ScrollView } from 'react-native';
import { DataTable, Card, Title, Searchbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TransactionHistory = (props) => {
  return(
    <Card style={{margin: 10 }}>
      <Card.Content>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Title style={{fontFamily: 'Lato-Bold', fontSize: 16}}>TRANSACTION HISTORY</Title>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Header >
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title style={{marginLeft: 10}}>Transaction</DataTable.Title>
            <DataTable.Title style={{marginLeft: 40}}>Buyer</DataTable.Title>
            <DataTable.Cell ></DataTable.Cell>
          </DataTable.Header>
          <DataTable.Row  onPress={() => props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={()=> props.navigation.navigate('Transaction Details')}>
            <DataTable.Cell>12/02/2020 </DataTable.Cell>
            <DataTable.Cell numeric>Bought wholesale malunggay</DataTable.Cell>
            <DataTable.Cell numeric>Juan Cruz</DataTable.Cell>
            <DataTable.Cell numeric><MaterialCommunityIcons name="chevron-right" color="#6200EE" size={30} /></DataTable.Cell>
          </DataTable.Row>
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