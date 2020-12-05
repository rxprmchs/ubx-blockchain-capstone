import React from 'react'
import { Surface } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const HeaderContianer = props => {
  return(
      <Surface style={styles.surface}>
        {props.children}
      </Surface>
)}

const styles = StyleSheet.create({
  surface: {
    display: 'flex',
    flexDirection: 'column',
    bottom: 0,
    backgroundColor: '#6200EE',
    height: 150,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
  },
});

export default HeaderContianer;