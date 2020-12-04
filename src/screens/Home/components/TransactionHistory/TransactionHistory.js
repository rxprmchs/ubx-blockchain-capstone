import * as React from 'react';
import { ScrollView } from 'react-native';
import { DataTable, Card } from 'react-native-paper';

const TransactionHistory = () => {
  return(
    <Card style={{margin: 10 }}>
      <Card.Content>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Vegetable</DataTable.Title>
            <DataTable.Title numeric>Qty</DataTable.Title>
            <DataTable.Title numeric>Price</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Sayote</DataTable.Cell>
            <DataTable.Cell numeric>159</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Malunggay</DataTable.Cell>
            <DataTable.Cell numeric>100</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Ampalaya</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Kamote</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Pechay</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Kangkong</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Upo</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Gabi</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Mustasa</DataTable.Cell>
            <DataTable.Cell numeric>237</DataTable.Cell>
            <DataTable.Cell numeric>200</DataTable.Cell>
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