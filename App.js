import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IndicatorViewPager from './src/indicatorViewPager'
const App = () => {
  return (
    <View style={styles.container}>
      <IndicatorViewPager />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})