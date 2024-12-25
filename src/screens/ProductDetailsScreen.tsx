import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const ProductDetailsScreen = () => {
  return (
    <LinearGradient
          colors={['#FDF0F3', '#FFFBFC']}
          style={styles.container}
        >
      <Text>ProductDetailsScreen</Text>
    </LinearGradient>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})