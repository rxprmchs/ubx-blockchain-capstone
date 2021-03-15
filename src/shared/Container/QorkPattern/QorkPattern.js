import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const QorkPatternContainer = props => {
  const image = {uri : '../../../../../assets/images/pattern.svg'}
  return(
    <>
      <LinearGradient
        colors={['#DE933D', '#C92459', '#C92459']}
        style={{   borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
      >
        <ImageBackground source={image} style={styles.mainContainer} imageStyle={{resizeMode: 'stretch', width: '100%'}}>
          {props.children}
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 250,
    width: '100%',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25
  },
})

export default QorkPatternContainer