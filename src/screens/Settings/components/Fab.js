import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Fab = (props) => (
  <FAB
    style={styles.fab}
    small
    icon={props.icon? props.icon : "plus"}
    onPress={() => props.onPress? props.onPress() : console.log('FAB triggered.')}
  />
);

const styles = StyleSheet.create({
  fab: {
	backgroundColor:'#C92459',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
})

export default Fab;